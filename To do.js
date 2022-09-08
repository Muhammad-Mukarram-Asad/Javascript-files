// Declaration of a global variable which is use in modification and updation functions below:

var edit_element;


function addition()
        {
            var input = document.getElementById('input');

            
            var ul = document.getElementById('list');
            var list_element = document.createElement('li');

             //Deletion Button Creation:

             var btn_delete = document.createElement('button');
            btn_delete.innerHTML = 'Delete Item';
            btn_delete.setAttribute('onclick','Deletion(event)');


            // Btn_delete styling through JS:
            btn_delete.style.color = "Blue";
            btn_delete.style.backgroundColor = "white";
            btn_delete.style.borderWidth = "2px"
            btn_delete.style.borderColor = "black";
            btn_delete.style.borderStyle = "solid";
            btn_delete.style.width = '120px';
            btn_delete.style.height = '50px';
            btn_delete.style.marginTop = '10px';
            btn_delete.style.marginLeft = '15px';
            btn_delete.style.fontSize = "20px";

            // Edit Button Creation:

            var btn_edit = document.createElement('button');
            btn_edit.innerHTML = 'Edit Item';
            btn_edit.setAttribute('onclick','Modification(event)');

            // <i onClick="editPost(this)" class="fas fa-edit"></i>

            // Btn_edit styling through JS:

            btn_edit.style.color = "Blue";
            btn_edit.style.backgroundColor = "white";
            btn_edit.style.borderWidth = "2px"
            btn_edit.style.borderColor = "black";
            btn_edit.style.borderStyle = "solid";
            btn_edit.style.width = '120px';
            btn_edit.style.height = '50px';
            btn_edit.style.marginTop = '10px';
            btn_edit.style.marginLeft = '15px';
            btn_edit.style.fontSize = "20px";


            list_element.innerHTML = input.value;
            if(input.value == "")
            {
                // alert(" Sorry, you can't leave blank input field.");
                var msg = document.getElementById('msg');
                msg.style.display = "block";
            }
            else
            {
                var msg = document.getElementById('msg');
                msg.style.display = "none";
               ul.appendChild(list_element);

            }

            list_element.appendChild(btn_edit);
            list_element.appendChild(btn_delete);
           
            input.value = '';
        }

        function Deletion(event)
        {
            // Event --> The thing on which any event fires or any function calls on pressing it.
            var li = event.target.parentElement; // targeting the event's parent element.
            var ul = li.parentElement;
            ul.removeChild(li);
        }

        function Modification(event)
        {
            // Targeting the input field.
            var input = document.getElementById('input');
            
            console.log(event.target.innerHTML);

            // Targeting the li tag full.
            var li = event.target.parentElement;
            console.log(li)

            // Targeting the <li> first child only not all.

            console.log(li.childNodes[0].nodeValue);

        
            // Putting the first child value into the input field.
            input.value = li.childNodes[0].nodeValue;

            var btns = document.getElementsByTagName('button');
            var add_btn = btns[0];
            var update_btn = btns[1];

            add_btn.style.display = "none";
            update_btn.style.display = "inline";

            edit_element = li ;

            edit_element.style.color = "white";
            edit_element.style.backgroundColor = "red";

        }

        function updation()
        {
            // Targeting the buttons which are in HTML.
            var btns = document.getElementsByTagName('button');
            var add_btn = btns[0];
            var update_btn = btns[1];

            // Add styling on them.

            add_btn.style.display = "inline";
            update_btn.style.display = "none";

            // Targeting the input field.
            var input = document.getElementById('input');

            // targeting the li tag <li> and specially its first child which is text.
            edit_element.childNodes[0].nodeValue = input.value;
            edit_element.style.backgroundColor = "black";

            // Removing the text from the input field.
            input.value = "";

          
        }

        // Some tips taken from internet.

        /*
            1) childNodes --> Burger Bacha means "tag wala" .
            2) children --> simple Bacha means without "tag wala".


            var ul = event.parentElement.parentElement.innerHTML;
            console.log(list_element.firstChild);
            var b = a.slice(0,(list_element.firstChild.length));
            console.log(ul);
            console.log(a);
            console.log(b);

            var list_element = input.value;

            input.value = ul
            event.parentElement.parentElement.remove();

            Deletion(event);
            input.value = '';
*/
        
