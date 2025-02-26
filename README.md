# 🕵️ SnoosnoopLookup  
*"Because sometimes, you just gotta snoop the snoopers."*  

SnoosnoopLookup is a simple tool designed to help you look up Reddit users on [SnooSnoop.com](https://snoosnoop.com). Whether you're verifying old accounts or just curious about someone's Reddit history, this tool makes it quick and easy.  

---

## 🔍 About SnooSnoop  

[SnooSnoop](https://snoosnoop.com) is a **resurrection of u/onionmelt's SnoopSnoo** website, which was discontinued due to changes in Blockspring’s API.  

- 🏗️ **Backend:** Based on the [Sherlock](https://github.com/orionmelt/sherlock) framework, rewritten in **Python 3** with additional modifications.  
- 🎨 **Frontend:** A rewrite of the **SnoopSnoo** project, converted from **Flask/JavaScript/D3.js** to **Django/Python/Highcharts**.  
- 📡 **Functionality:** Fetches data from the **Reddit API** for public user analysis.  

---

## 🚀 How to Use SnoosnoopLookup  

### Option 1: Manual Download  
1. Download the files from this GitHub repository.  
2. Follow the setup instructions (see below).  

### Option 2: Bookmarklet (The Lazy Snooper Method™)  
Use this bookmarklet to instantly check a Reddit user's profile on SnooSnoop. Before clicking, **make sure you're on a Reddit user’s page** (`reddit.com/user/username`), or it won’t work!  

#### 📌 Bookmarklet Code:  
Simply create a new bookmark in your browser and set the following as the URL:  

```js
javascript:(function() { 
    var username = location.href.match(/reddit.com\/user\/([^\/]+)/); 
    if (username) { 
        window.open('https://snoosnoop.com/u/' + username[1], '_blank'); 
    } else { 
        alert("Oops! This doesn’t seem to be a Reddit user page."); 
    } 
})();
```
*(No cookies, no tracking, just snoopin’ made simple.)*  

---

## 🏆 Credits  

- 🧠 **Natural Language Processing:** [TextBlob](https://textblob.readthedocs.io/en/dev/) and [NLTK](https://www.nltk.org/)  
- 📊 **Data Visualization:** Highcharts and D3.js  
- 🔍 **Backend Framework:** [Sherlock](https://github.com/orionmelt/sherlock)  

---

## 🛡️ Security & Transparency  

Because we believe in snooping responsibly, we’ve run a VirusTotal scan to keep things clean:  
🔍 **[VirusTotal Scan Results](https://www.virustotal.com/gui/file/3d115b9f24f83d0d563f5a6e60cb406428aa68e19d28940bcc91cb6315dc327)**  
📁 **[RAR File Analysis](https://www.virustotal.com/gui/file-analysis/ODlIYWQxZTQwYmM3Yg0YjJiNmEwMDk5MjZiZmJnNzM6MTczODM3NTQ3Mg==)**  

---

## ⚠️ Disclaimer  

🔸 **All data analyzed is public.** SnooSnoop does not store private Reddit data such as:  
- Passwords 🔒  
- Subreddit subscriptions 📜  
- Upvotes/downvotes ⬆️⬇️  
- Private subreddit activity 🚫  

This website is **not affiliated with Reddit** in any way. Use responsibly and ethically.  

---

## 💡 Support & More Info  

- 🌐 **Website:** [SnooSnoop](https://snoosnoop.com/)  
- 🛡️ **Subreddit:** [r/Snoosnoop](https://www.reddit.com/r/snoosnoop/)  
- 👤 **Creator's Reddit Profile:** [MemoryEmptyAgain](https://www.reddit.com/user/MemoryEmptyAgain/)  
- ☕ **Support Development:** [Donate on Ko-fi](https://ko-fi.com/memoryemptyagain)  

*"Happy snooping, but keep it ethical!"* 🕶️ 
