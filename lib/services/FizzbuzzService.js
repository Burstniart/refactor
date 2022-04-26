class FizzbuzzService {
    static applyValidationInExplorer(explorer) {
        if(explorer.score % 3 === 0){
            explorer.trick = "FIZZ";
            return explorer;
        } else if (explorer.score % 5 === 0){
            explorer.trick = "BUZZ";
            return explorer;
        } else {
            explorer.trick = explorer.score;
            return explorer;
        }
    }
    // Callback example
    // const explorersInNodeAndFizzTrick = explorersInNode.map((explorer) => assignFizzTrick(explorer));
    // console.log(explorersInNodeAndFizzTrick);
}
module.exports = FizzbuzzService