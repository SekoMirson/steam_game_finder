# 🎮 Steam Game Finder (Node.js + Express)

Bu proje **Steam API** üzerinden oyun bilgilerini çeker ve şık bir **web arayüzü** ile görüntüler.  
Kullanıcı, bir **Steam AppID** girerek oyunun adını, çıkış tarihini, fiyatını, açıklamasını ve kapak görselini görebilir.  

---

## 🚀 Özellikler
- Steam `appdetails` API'si kullanılır.
- `Express` backend ile oyun bilgileri alınır.
- `EJS` template engine ile şık **dark & neon tasarım**.
- Yanlış AppID girildiğinde **"Uygulama bulunmadı"** mesajı gösterilir.
- Bootstrap tabanlı responsive tasarım.

---

## 📦 Kurulum
# Projeyi klonla
git clone https://github.com/kullanici/steam-game-api.git
cd steam-game-api

# Bağımlılıkları yükle
npm install
▶️ Çalıştırma
node steam_game_api.js
Ardından tarayıcıdan şu adrese git:
👉 http://localhost:3000

🔎 Kullanım
Ana sayfada (/) oyun AppID girilir.
Örnek: 730 (Counter-Strike 2)

Form gönderildiğinde /game/:id sayfasında oyun bilgileri gösterilir.

👨‍💻 Geliştirici
Serxan Mirzeyev (SeKoMirson)
