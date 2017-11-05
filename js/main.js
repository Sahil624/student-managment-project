const batch = "UCA2018";
let batch2 = "UCA2019";

function getStudentDetails() {
    document.getElementById("username").innerHTML = batch;
}

["a", "b"].map(name => `${name}!`);

$(document).ready(() => {


    const cross = '<span class="glyphicon glyphicon-remove"></span>';
    const edit = '<span class="glyphicon glyphicon-pencil"></span>';

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
        console.log(out);
        return out;
    }

    function put_data(){
        var final = `<tr>
        <th>Roll No</th>
        <th>Name</th>
        <th>Passout Year</th>
        <th>Stream</th>
        <th> </th>
    </tr>`;
        console.log('putting',data);
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
        console.log(data)
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
                    <input type="name" class="form-control" id="name" value=${data.name}>
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
                <button type="button" class="btn btn-default submit" data-dismiss="modal">Submit</button>
            </form> 
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
      </div>`

      return text;
    }

    $(document).on("click", ".edit-button", function() {
        id = $(this).attr('id');
        text = make_model(data[id]);
        $('.modal-content').html(text);

        

        const check = document.getElementById("confirm").checked;
        $('.submit').click(() => {
            if (document.getElementById("confirm").checked){
                roll = $('#roll').val();
                name = $("#name").val();
                str = $('#stream').val();
                pass = $('#pass').val();

                updated  = new student(roll,name,pass,stream);

                data[id] = updated;
                console.log(data[id]);


                put_data()
            }
            else{
                alert("Please Confirm the Update");
            }
        })
    })


    $(document).on("mouseenter", ".edit-button", function() {
        $(this).width(`${100}px`);
        $(this).css({
            'margin':20
        })
        $(this).html(`<button class="btn btn-warning" id="edit" data-toggle="modal" data-target="#myModal">${edit}</button>
        <button class="btn btn-danger delete_stu">${cross}</button>`);
        $('.delete_stu').click(function(){
            row_to_delete = $(this).parent().parent().parent();
            data.splice(row_to_delete,1);
            console.log(row_to_delete);
            row_to_delete.remove();
        })
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

    $(".add").click(() => {
        blank = new student("","","","");
        text = make_model(blank);
        $('.modal-content').html(text);

        $('.submit').click(() => {
            if (document.getElementById("confirm").checked){
                roll = $('#roll').val();
                name = $("#name").val();
                str = $('#stream').val();
                pass = $('#pass').val();

                new_data = new student(roll,name,pass,str);
                data.push(new_data);
                console.log(data);


                put_data()
            }
            else{
                alert("Please Confirm the Update");
            }
        })
    });

    function del(arr){
        console.log("delete",arr);
        for(let i=0;i<arr.length;i++){
            
        }
    }

    $(document).on('click','.mul_del',function(){
        check = document.getElementsByClassName('checkit');

        for(let i=0;i<check.length;i++){
            if(check[i].checked == true){
                console.log($(check[i]).attr('id'),i);
                data.splice(check[i],1);
            }
        }
        put_data();
    })

});