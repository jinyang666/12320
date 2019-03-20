<script type="text/javascript">
    //let basePath = "/WebProject/app/";
    let basePath = "/dcloud-provider-uac";

    const reg_in_url = basePath + '/outUser/reg/saveReg'; //登录几口

    const get_myCenter = basePath + '/pfPatient/myCenter'; //就诊人 用户列表

    const login_in = '/dcloud-auth/auth/form'; //登录接口

    const myFinancingRecordRongWin = basePath + 'myFinancingRecordRongWin'; //获得可以融资列表

    const checkRegister = basePath + 'checkRegister'; //验证手机号吗是否注册

    const uploadImg= basePath + 'uploadImg'; //上传图片接口

    const findAllBranchsByLevel=basePath + 'findAllBranchsByLevel'; 
    
    export default {
        reg_in_url,
        get_myCenter,
        login_in,
        myFinancingRecordRongWin,
        checkRegister,
        uploadImg,
        findAllBranchsByLevel,
    }   
</script>
