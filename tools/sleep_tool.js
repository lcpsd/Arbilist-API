function sleep(seg) {
    seg = seg * 1000
    return new Promise(resolve => setTimeout(resolve, seg));
}
module.exports = sleep