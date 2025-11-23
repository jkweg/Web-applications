function generuj_haslo(){
    const min_len = parseInt(document.getElementById("min_len").value);
    const max_len = parseInt(document.getElementById("max_len").value);
    const czy_duze = document.getElementById("czy_duze").checked;
    const czy_specjalne = document.getElementById("czy_specjalne").checked;

    let chars = "abcdefghijklmnopqrstuvwxyz";
    if (czy_duze) chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (czy_specjalne) chars += "!@#$%^&*()_-+=<>?/{}[]|";

    if(isNaN(min_len) || isNaN(max_len)|| min_len <= 0 || max_len <=0 || max_len < min_len){
        alert("Podaj dobre dane");
        return;
    }

    const len = Math.floor(Math.random() * (max_len - min_len + 1)) + min_len;

    let password = "";

    for (let i = 0;i<len;i++){
        let index  = Math.floor(Math.random() * chars.length);
        password += chars[index];
    }

    alert(password)

}