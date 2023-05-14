const cookieParser = require("cookie-parser");
app.use(cookieParser());
app.post("/login", (req, res) => {
  //1. 요청된 이메일을 데이터베이스에 있는지 찾는다.
  User.findOne({ email: req.body.email }, (err, user) => {
    if (!user) {
      return res.json({
        loginSuccess: false,
        message: "해당 이메일이 존재하지 않습니다.",
      });
    }
    //2. 요청된 이메일이 데이터베이스에 있다면 비밀번호가 맞는지 확인
    user.comparePassword(req.body.password, (err, isMatch) => {
      if (!isMatch)
        return res.json({
          loginSuccess: false,
          message: "비밀번호가 틀렸습니다.",
        });
    });
    //3. 비밀번호가 맞다면 토큰을 생성
    user.generateToken((err, user) => {
      if (err) return res.status(400).send(err);
      // 토큰을 저장한다. 어디에? 쿠키, 로컬스토리지
      res
        .cookie("x_auth", user.token)
        .status(200)
        .json({ loginSuccess: true, userId: user_id });
    });
  });
});
