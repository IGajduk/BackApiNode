let router = require('express').Router();

let ProductRouter = require('./productRouter');
let CategoryRouter = require('./categoryRouter');
let CommentRouter = require('./commentRouter');
let OrderRouter = require('./orderRouter');
let PaymentRouter = require('./paymentRouter');
let ProducerRouter = require('./producerRouter');
let UserRouter = require('./userRouter');
let ProductsByCategoryRouter = require('./productByCategoryRouter');
let CommentsByProductRouter = require('./commentsByProductRouter');
let LoginRouter = require('./loginRouter');
let SigninRouter = require('./signinRouter');
let RegistrationRouter = require('./registrationRouter');
let UploadImgRouter = require('./uploadRouter');
let LogoutRouter = require('./logoutRouter');
let ImgUpload = require('./imgUpload');
let PassportMiddleware = require('../middleware/passport');

router.use('/products', ProductRouter);
router.use('/productsByCategory', ProductsByCategoryRouter);
router.use('/commentsByProduct', CommentsByProductRouter);
router.use('/categories', CategoryRouter);
router.use('/comments', CommentRouter);
router.use('/orders', PassportMiddleware.isLoggedIn, OrderRouter);
router.use('/payments', PassportMiddleware.isLoggedIn, PaymentRouter);
router.use('/producers', ProducerRouter);
router.use('/users', PassportMiddleware.isLoggedIn, UserRouter);
router.use('/login', LoginRouter);
router.use('/sign', SigninRouter);
router.use('/register', RegistrationRouter);
router.use('/logout', LogoutRouter);
router.use('/upload', UploadImgRouter);
// router.use('/img_upload', ImgUpload);





module.exports = router;