/**
 * Created by Administrator on 2017/7/15.
 */
const IPCONFIG='http://127.0.0.1:8080';//全局iP地址url verificationCode
const VERIFICATIONCODE=IPCONFIG+'';//获取验证码
const LOGIN_API=IPCONFIG+'/icehockey_ServerV3/jsp/login.jsp';// login api url
const ISLOGIN_NAME='isLogin';//登陆之后设置的名称
const ERROR_URL='';//错误信息url
const HobbyURL=IPCONFIG+'/icehockey_ServerV3/jsp/hobbyChoose.jsp'; //我是选择玩雪还是玩冰或者两者都玩
const ICEURL=IPCONFIG+'/icehockey_ServerV3/jsp/hobbySelectIce.jsp';//我是玩冰的
const SNOWURL=IPCONFIG+'/icehockey_ServerV3/jsp/hobbySelectSnow.jsp';//我是玩雪的
const HANDLINGURL=IPCONFIG+'/icehockey_ServerV3/jsp/chiganfangshi.jsp';//持杆方式url
const ROLEURL=IPCONFIG+'/icehockey_ServerV3/jsp/role.jsp';//角色url
const GENDERURL=IPCONFIG+'/icehockey_ServerV3/jsp/gender.jsp';//性别选择url
const HeightURL=IPCONFIG+'/icehockey_ServerV3/jsp/height.jsp';//身高选择url
const WeightURL=IPCONFIG+'/icehockey_ServerV3/jsp/weight.jsp';//体重选择url
const BodyURL=IPCONFIG+'/icehockey_ServerV3/jsp/body.jsp';//其他信息选择url
const ALIASURL=IPCONFIG+'/icehockey_ServerV3/jsp/alias.jsp';//头像选择url