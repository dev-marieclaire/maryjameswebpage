// contact.js

window.onload = function()
{
	// const ds_ico = document.getElementById("ds_ico");
    const mail_ico = document.getElementById("mail_ico");

    /*
        // Uh oh, this was meant to be deleted, but since you're here,
        // as reward I give you my Discord contact.
        // (which is inside the funcion)
        
        ds_ico.onclick = copy;
        function copy() { navigator.clipboard.writeText('lefilleimpressionniste'); }
    */

    mail_ico.onclick = redirect;
    function redirect() { window.location.href = "mailto:mail.maryjamesb@gmail.com"; }
}