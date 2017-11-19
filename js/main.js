const batch = "UCA2018";
let batch2 = "UCA2019";

function getStudentDetails() {
    document.getElementById("username").innerHTML = batch;
}

["a", "b"].map(name => `${name}!`);

$(document).ready(() => {

    const home_page = `
                <div class="play_area container">
                    <button class="btn btn-success add" data-toggle="modal" data-target="#myModal">Add Student detail</button>
                    <button class="btn btn-danger mul_del" style="float:right;">Delete Selected</button>


                    <div class="student_list table-responsive">
                        <table class="table table-hover put">
                            
                        </table>
                    </div>

                <!-- Modal -->
                    <div id="myModal" class="modal fade" role="dialog">
                        <div class="modal-dialog">
                      
                              <!-- Modal content-->
                            <div class="modal-content">
                                
                            </div>
                  
                        </div>
                    </div>
                </div>`;

    const cross = '<span class="glyphicon glyphicon-remove"></span>';
    const edit = '<span class="glyphicon glyphicon-pencil"></span>';

    $(document).on('click','.start',() => {
        $('body').css({
            'background-image':'url(http://www.bufferts.com/wp-content/uploads/2013/10/education1.png)'
        })
        $('.main_area').html(home_page);
        put_data();
    })

    function student(roll,name,pass,stream)
    {
        this.roll_no = roll;
        this.name = name;
        this.pass = pass;
        this.stream = stream;
    }

    function make_data()
    {
        const out = [];
        const names = ["Tyron","Osbourn","Neely","Uplinger","Margert","Marshal","Marketta","Ziolkowski","Bribiesca","Alfreda"];
        const streams = ["CSE","MBA","ME","Barch","B.Com","M.com","Nursing","ECE","B pharma","CE"];
        for(let i=0;i<10;i++)
        {
            
            roll_no = Math.floor(Math.random() * 10000);
            name = names[Math.floor(Math.random()*10)];
            pass = Math.floor(Math.random()*10000);
            stream = streams[Math.floor(Math.random() * 10)];
            out.push(new student(roll_no,name,pass,stream));
            //console.log(out)
        }
        // console.log(out);
        return out;
    }

    function put_data(){
        let final = `<tr>
        <th>Roll No</th>
        <th>Name</th>
        <th>Passout Year</th>
        <th>Stream</th>
        <th> </th>
    </tr>`;
        // console.log('putting',data);
        // $('.put').text('');
        for(let i=0;i<data.length;i++)
        {
            row = `<tr>
                <td>
                <input class="checkit" id=${i} type="checkbox">  ${data[i].roll_no}</td>
                <td>${data[i].name}</td>
                <td>${data[i].pass}</td>
                <td>${data[i].stream}</td>
                <td class = "text-center edit">
                    <div id=${i} class="edit-button btn">
                    <button class="btn btn-default">${edit}</button>
                    </div>
                </td>
            </tr>`;
           final = final + row;
        }
        $('.put').html(final);
    }

    const data = make_data();
    put_data()

    

    function make_model(data){
        // console.log(data)
        let text = `<div class="modal-header">
        <button type="button" class="close" data-dismiss="modal">&times;</button>
        <h4 class="modal-title">Edit Details of ${data.name}</h4>
      </div>
      <div class="modal-body">
            <form>
                <div class="form-group">
                    <label for="roll">Roll:</label>
                    <input class="form-control" id="roll" value=${data.roll_no}>
                </div>
                <div class="form-group">
                    <label for="name">Name:</label>
                    <input type="name" class="form-control" type="text" id="name" value=${data.name}>
                </div>
                <div class="form-group">
                    <label for="stream">Stream:</label>
                    <input class="form-control" id="stream" value=${data.stream}>
                </div>
                <div class="form-group">
                    <label for="pass">Pass out Year:</label>
                    <input class="form-control" id="pass" value=${data.pass}>
                </div>
                <div class="checkbox">
                    <label><input id="confirm" type="checkbox"> Confirm</label>
                </div>
                <button type="button" class="btn btn-default submit">Submit</button>
            </form> 
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
      </div>`

      return text;
    }

    function submit(){
        if (document.getElementById("confirm").checked){
                roll = $('#roll').val();
                name = $("#name").val();
                str = $('#stream').val();
                pass = $('#pass').val();

                if(/^\d+$/.test($('#roll').val()) == true && $("#name").val()!="" && $("#roll").val()!="" && $("#stream").val()!="" && $("#pass").val()!="" && /^\d+$/.test($('#pass').val()) == true ){
                  
                    updated  = new student(roll,name,pass,stream);
                    data[id] = updated;
                    put_data();
                    
                    $('.modal').modal('toggle');
                }
                else{
                    if($("#name").val()=="" || $("#roll").val()=="" || $("#stream").val()=="" || $("#pass").val()=="")
                        alert("ALL Fields Required");
                    else if(/^\d+$/.test($('#pass').val()) == false)
                        alert("Passing Year should be a real number");
                    else if(/^\d+$/.test($('#roll').val()) == false)
                        alert("Roll should be a real number");
                    }

                put_data()
            }
            else{
                alert("Please Confirm the Update");
            }
    }

    $(document).on("click", ".edit-button", function() {
        id = $(this).attr('id');
        // console.log("ID",id);
        text = make_model(data[id]);
        $('.modal-content').html(text);

    

        const check = document.getElementById("confirm").checked;
        $('.submit').click(() => {
            submit()
        })
    })

    $(document).on('click','.del_this',function(){
        id = $(this).parent().attr('id');
        // console.log(this,id);
        data.splice(id,1);
        put_data()
    })

    $(document).on("mouseenter", ".edit-button", function() {
       
        $(".edit-button").width(`60px`);
        $(".edit-button").css({
            'margin':20
        });
        $(".edit-button").html(`<button class="btn btn-default">${edit}</button>`);

        $(this).width(`${90}px`);
        $(this).css({
            'margin':20
        })
        $(this).html(`<button class="btn btn-warning" id="edit" data-toggle="modal" data-target="#myModal">${edit}</button>
        <button class="btn btn-danger del_this">${cross}</button>`);
        $(this).children().css({
            'padding':10,
            'margin-right':10
        })
    });

    $(document).on("mouseleave", ".edit-button", function() {
        $(this).width(`60px`);
        $(this).css({
            'margin':20
        });
        $(this).html(`<button class="btn btn-default">${edit}</button>`);
    });

    $(document).on('click','.add',() => {
        blank = new student("","","","");
        text = make_model(blank);c=
        $('.modal-content').html(text);

        $('.submit').click(() => {
            submit();
        })
    })

    $(document).on('click','.mul_del',() => {
        check = document.getElementsByClassName('checkit');

        for(let i=0;i<check.length;i++){
            if(check[i].checked == true){
                // console.log(check[i],i);
                data.splice(check[i],1);
            }
        }
        put_data();
    })

    $(document).on('click','input',() => {
        $('input').css({
            'border':'white'
        })
    })

});