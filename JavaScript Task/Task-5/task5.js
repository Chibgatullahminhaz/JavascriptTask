var latter = prompt("Enter a latter :");
// var convet = latter.toUpperCase();

switch(latter){
    case "a":
    case "A":
        document.write("vowel");
      break;

      case "e":
      case "E":
        document.write("vowel");
        break;

        case "i":
            case "I":
                document.write("vowel");
            break;

            case "I":
            case "i":  
            document.write("vowel");
                break;

                case "o":
                    case "O":
                    document.write("vowel");
                    break;

                    default:
                        document.write("This Latter is consonent");
}



// otherwese

var letter = prompt("Enter any latter");
var latter = latter.toLowerCase();

switch(latter){
case "a":
case "e":
case "i":
case "o":
case "u":
    document.write("vowel");

    default:
        document.write("consonent");

}