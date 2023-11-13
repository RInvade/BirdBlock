


setInterval(blockAdd, 1000);


function getOptions(element){
    return element.querySelector('[ aria-haspopup="menu"]');
}

function getPromoted(){
    return document.querySelector('[data-testid="promotedIndicator"]');
}
function blockAdd(){

    var element = getPromoted();
    if(element !=null && isInViewport(element)){
        console.log("found");
        var target = getFullTweet(element);
        var options = getOptions(target);
        options.click();
        document.querySelector('[data-testid="block"]').click();
        document.querySelector('[data-testid="confirmationSheetConfirm"]').click();
        return;
    }
    element = getSecondType();

    if(element !=null && isInViewport(element)){
        console.log("found");
        var target = getFullTweet(element);
        var options = getOptions(target);
        options.click();
        document.querySelector('[data-testid="block"]').click();

        document.querySelector('[data-testid="confirmationSheetConfirm"]').click();
        return;
    }


}
function getSecondType(){
    return document.querySelector('[data-testid="top-impression-pixel"]');
}

function getFullTweet(myDiv){
    for (var i = 0; i < 3; i++) {
        // Check if there is a parent before getting it
        if (myDiv.parentNode) {
          myDiv = myDiv.parentNode;
        } else {
          break;
        }
    }
    return myDiv;
}

function isInViewport(element) {
    var rect = element.getBoundingClientRect();

    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}