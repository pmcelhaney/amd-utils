define(['./isKind'], function (isKind) {

    /**
     * @version 0.1.0 (2011/10/31)
     */
    function isArgs(val){
        return isKind(val, 'Arguments');
    }
    return isArgs;
});
