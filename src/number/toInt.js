define(function(){
    /**
     * "Convert" value into an 32-bit integer.
     * Works like `Math.floor` if val > 0 and `Math.ceil` if val < 0.
     * IMPORTANT: val should be inside range number/MIN_INT...number/MAX_INT.
     * Perf tests: http://jsperf.com/vs-vs-parseint-bitwise-operators/7
     * @author Miller Medeiros
     * @version 0.1.0 (2011/10/21)
     */
    function toInt(val){
        return ~~val;
    }
    return toInt;
});
