// משיכת ההגדרות מוובפלואו (אם הוגדרו), אחרת שימוש באובייקט ריק
const config = window.siteConfig || {};

// Accessibility Widget (UserWay)
(function(d){
  var s = d.createElement("script");
  
  // משתנים שאפשר לשנות פר אתר דרך וובפלואו
  s.setAttribute("data-color", config.uwColor || "#111111");
  s.setAttribute("data-position", config.uwPosition || 5);
  s.setAttribute("data-size", config.uwSize || "small");
  
  // חשבון הסוכנות - נשאר קבוע לכל האתרים
  s.setAttribute("data-account", "PoJJ4CiM9z");
  
  s.setAttribute("src", "https://cdn.userway.org/widget.js");
  (d.body || d.head).appendChild(s);
})(document);


console.log("SmartLeads: Accessibility Script Loaded!");
