function changeImage(slide_show, numInd)
{
    var numToChange = slide_show.name.charAt(3);
    var finalNum = 0;
    if ((numToChange == 1) && (numInd == -1)) {
        finalNum = 5;
    }
    else if ((numToChange == 5) && (numInd == 1)) {
        finalNum = 1;
    }
    else
    {
        finalNum = Number(numToChange) + numInd;
    }
    slide_show.src = "img" + finalNum + ".jpg";
    slide_show.name = "img" + finalNum + ".jpg";
}