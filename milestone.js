document.getElementById('savebtn').addEventListener('click',()=>{
    const payData={
        name:document.getElementById('name').value,
        eid:document.getElementById('eid').value,
        phone:document.getElementById('phone').value,
    };
    localStorage.setItem('payData',JSON.stringify(payData));
    alert('payslip data saved successfully!');
});

document.getElementById('printbtn').addEventListener('click',()=>{
    const payData=JSON.parse(localStorage.getItem('payData'));
    if(payData)
    {
        const print=window.open('','_blank');

        print.document.writeln(`Name ${payData.name}`);
        print.document.writeln(`Eid ${payData.eid}`);
        print.document.writeln(`Phone ${payData.phone}`);


    }
});