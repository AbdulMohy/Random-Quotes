let shayari = [`उजाले अपनी यादों के हमारे साथ रहने दो 

न जाने किस गली में ज़िंदगी की शाम हो जाए _____-बशीर बद्र`, `और भी दुख हैं ज़माने में मोहब्बत के सिवा 

राहतें और भी हैं वस्ल की राहत के सिवा _____-फ़ैज़ अहमद फ़ैज़`, `रंजिश ही सही दिल ही दुखाने के लिए आ 

आ फिर से मुझे छोड़ के जाने के लिए आ  _____-अहमद फ़राज़`, `दिल ना-उमीद तो नहीं नाकाम ही तो है 

लम्बी है ग़म की शाम मगर शाम ही तो है _____-फ़ैज़ अहमद फ़ैज़`];


const random = Math.floor(Math.random() * shayari.length);

let shayariDisplay = document.getElementById("shayariDisplay");
shayariDisplay.innerHTML = shayari[random];

function reload(){
    window.location.reload();
}