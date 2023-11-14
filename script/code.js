/*Query selector allows you to targer the specific attribute */

let btnSubmit = document.querySelector('[data-submit]');

//Create function
//Get the input value from the user
//The unary operator allows you to convert the input to a string
function displayMarks(){
    let marks = +document.querySelector('[data-marks]').value

    //label's reference
    let output = document.querySelector('[data-output]');
}

//switch
//the data type for the switch and the case need to be the same
//after each case statement you need to have a break
switch(true){
    case 100:
        output.textContent("A+")
        break;
        case  marks  <= 99:
            output.textContent("A")
            break;
            case  marks <= 89:
                output.textContent("B")
                break;
                case  marks <= 79:
                output.textContent("Distinction")
                break;
                case  marks <= 69:
                output.textContent("C+")
                break;
                case  marks <= 59:
                output.textContent("Passed")
                break;
                case  marks < 50 :
               output.textContent("Failed")
                break;
                default:
                    output.textContent = 'You are a ghost!'
