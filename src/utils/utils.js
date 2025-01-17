export const formatText = (text) => {
    // Replace underscores with spaces and capitalize each word
    return text?.split('_')   // Split by underscore
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))  // Capitalize each word
      .join(' ');    // Join words with a space
  };
  
  export const limitWords = (text, wordLimit) => {
    const words = text?.split(' ');
    
    if (words.length > wordLimit) {
      // If more than 50 words, slice the first 50 and add "..."
      return words?.slice(0, wordLimit).join(' ') + '...';
    }
    
    // If less than or equal to 50 words, return the full text
    return text;
  };

  export const formatDate=(inputDate)=>{
    const date = new Date(inputDate);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Adding 1 because getMonth() returns zero-based months
    const year = date.getFullYear().toString();
  
    return `${day}/${month}/${year}`;
  }
  
  
     export  const convertToUniversalTime=(time12h)=> {
        // Check if the input is undefined or not in the expected format
        if (!time12h || typeof time12h !== 'string' || !time12h.includes(':')) {
            return "Invalid time format";
        }
    
        // Split the time string into hours, minutes, seconds, and AM/PM indicator
        const [time, period] = time12h.split(' ');
    
        // Split hours, minutes, and seconds
        const [hours, minutes, seconds] = time.split(':').map(Number);
    
        // Convert hours to 24-hour format
        let hours24 = hours % 12;
        hours24 += (period && period.toUpperCase() === 'PM') ? 12 : 0;
        
        // Convert midnight (12:00:00 AM) to 24-hour format (00:00:00)
        if (hours === 12 && (!period || period.toUpperCase() === 'AM')) {
            hours24 = 0;
        }
    
        // Return the time in 24-hour format
        return `${hours24.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }

    export const formatDateTime=(isoString)=>{
      const date = new Date(isoString);
  
      const day = String(date.getDate()).padStart(2, '0');
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const year = date.getFullYear();
  
      const hours = String(date.getHours()).padStart(2, '0');
      const minutes = String(date.getMinutes()).padStart(2, '0');
      const seconds = String(date.getSeconds()).padStart(2, '0');
  
      return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
  }
  
  export const getProviderName = (provider) => {
    try {
      // Check if provider_name is a string and can be parsed as JSON
      const parsedProviderName = JSON.parse(provider.provider_name);
      
      // If successfully parsed, return the 'en' value or any other property
      return parsedProviderName.en || provider.provider_name;
    } catch (error) {
      // If it's not JSON or can't be parsed, just return the string as is
      return provider.provider_name;
    }
  };


export function encodeData(data) {
  try {
    return btoa(JSON.stringify(data)); // Base64 encode the object
  } catch (error) {
    console.error("Encoding failed:", error);
    return null;
  }
}

// Function to decode Base64 data
export function decodeData(encodedData) {

  console.log(encodedData, "encodedData")
  try {
    return JSON.parse(atob(encodedData)); // Base64 decode
  } catch (error) {
    console.error("Decoding failed:", error);
    return "Invalid data"; // Handle decoding error
  }
}

  

  export const countries = [
    { name: "Afghanistan", code: "+93", flag: "🇦🇫", currency: "AFN" },
    { name: "Albania", code: "+355", flag: "🇦🇱", currency: "ALL" },
    { name: "Algeria", code: "+213", flag: "🇩🇿", currency: "DZD" },
    { name: "Andorra", code: "+376", flag: "🇦🇩", currency: "EUR" },
    { name: "Angola", code: "+244", flag: "🇦🇴", currency: "AOA" },
    { name: "Antigua and Barbuda", code: "+1-268", flag: "🇦🇬", currency: "XCD" },
    { name: "Argentina", code: "+54", flag: "🇦🇷", currency: "ARS" },
    { name: "Armenia", code: "+374", flag: "🇦🇲", currency: "AMD" },
    { name: "Australia", code: "+61", flag: "🇦🇺", currency: "AUD" },
    { name: "Austria", code: "+43", flag: "🇦🇹", currency: "EUR" },
    { name: "Azerbaijan", code: "+994", flag: "🇦🇿", currency: "AZN" },
    { name: "Bahamas", code: "+1-242", flag: "🇧🇸", currency: "BSD" },
    { name: "Bahrain", code: "+973", flag: "🇧🇭", currency: "BHD" },
    { name: "Bangladesh", code: "+880", flag: "🇧🇩", currency: "BDT" },
    { name: "Barbados", code: "+1-246", flag: "🇧🇧", currency: "BBD" },
    { name: "Belarus", code: "+375", flag: "🇧🇾", currency: "BYN" },
    { name: "Belgium", code: "+32", flag: "🇧🇪", currency: "EUR" },
    { name: "Belize", code: "+501", flag: "🇧🇿", currency: "BZD" },
    { name: "Benin", code: "+229", flag: "🇧🇯", currency: "XOF" },
    { name: "Bhutan", code: "+975", flag: "🇧🇹", currency: "BTN" },
    { name: "Bolivia", code: "+591", flag: "🇧🇴", currency: "BOB" },
    { name: "Bosnia and Herzegovina", code: "+387", flag: "🇧🇦", currency: "BAM" },
    { name: "Botswana", code: "+267", flag: "🇧🇼", currency: "BWP" },
    { name: "Brazil", code: "+55", flag: "🇧🇷", currency: "BRL" },
    { name: "Brunei", code: "+673", flag: "🇧🇳", currency: "BND" },
    { name: "Bulgaria", code: "+359", flag: "🇧🇬", currency: "BGN" },
    { name: "Burkina Faso", code: "+226", flag: "🇧🇫", currency: "XOF" },
    { name: "Burundi", code: "+257", flag: "🇧🇮", currency: "BIF" },
    { name: "Cabo Verde", code: "+238", flag: "🇨🇻", currency: "CVE" },
    { name: "Cambodia", code: "+855", flag: "🇰🇭", currency: "KHR" },
    { name: "Cameroon", code: "+237", flag: "🇨🇲", currency: "XAF" },
    { name: "Canada", code: "+1", flag: "🇨🇦", currency: "CAD" },
    { name: "Central African Republic", code: "+236", flag: "🇨🇫", currency: "XAF" },
    { name: "Chad", code: "+235", flag: "🇹🇩", currency: "XAF" },
    { name: "Chile", code: "+56", flag: "🇨🇱", currency: "CLP" },
    { name: "China", code: "+86", flag: "🇨🇳", currency: "CNY" },
    { name: "Colombia", code: "+57", flag: "🇨🇴", currency: "COP" },
    { name: "Comoros", code: "+269", flag: "🇰🇲", currency: "KMF" },
    { name: "Congo, Democratic Republic of the", code: "+243", flag: "🇨🇩", currency: "CDF" },
    { name: "Congo, Republic of the", code: "+242", flag: "🇨🇬", currency: "XAF" },
    { name: "Costa Rica", code: "+506", flag: "🇨🇷", currency: "CRC" },
    { name: "Croatia", code: "+385", flag: "🇭🇷", currency: "HRK" },
    { name: "Cuba", code: "+53", flag: "🇨🇺", currency: "CUP" },
    { name: "Cyprus", code: "+357", flag: "🇨🇾", currency: "EUR" },
    { name: "Czech Republic", code: "+420", flag: "🇨🇿", currency: "CZK" },
    { name: "Denmark", code: "+45", flag: "🇩🇰", currency: "DKK" },
    { name: "Djibouti", code: "+253", flag: "🇩🇯", currency: "DJF" },
    { name: "Dominica", code: "+1-767", flag: "🇩🇲", currency: "XCD" },
    { name: "Dominican Republic", code: "+1-809", flag: "🇩🇴", currency: "DOP" },
    { name: "Ecuador", code: "+593", flag: "🇪🇨", currency: "USD" },
    { name: "Egypt", code: "+20", flag: "🇪🇬", currency: "EGP" },
    { name: "El Salvador", code: "+503", flag: "🇸🇻", currency: "USD" },
    { name: "Equatorial Guinea", code: "+240", flag: "🇬🇶", currency: "XAF" },
    { name: "Eritrea", code: "+291", flag: "🇪🇷", currency: "ERN" },
    { name: "Estonia", code: "+372", flag: "🇪🇪", currency: "EUR" },
    { name: "Eswatini", code: "+268", flag: "🇸🇿", currency: "SZL" },
    { name: "Ethiopia", code: "+251", flag: "🇪🇹", currency: "ETB" },
    { name: "Fiji", code: "+679", flag: "🇫🇯", currency: "FJD" },
    { name: "Finland", code: "+358", flag: "🇫🇮", currency: "EUR" },
    { name: "France", code: "+33", flag: "🇫🇷", currency: "EUR" },
    { name: "Gabon", code: "+241", flag: "🇬🇦", currency: "XAF" },
    { name: "Gambia", code: "+220", flag: "🇬🇲", currency: "GMD" },
    { name: "Georgia", code: "+995", flag: "🇬🇪", currency: "GEL" },
    { name: "Germany", code: "+49", flag: "🇩🇪", currency: "EUR" },
    { name: "Ghana", code: "+233", flag: "🇬🇭", currency: "GHS" },
    { name: "Greece", code: "+30", flag: "🇬🇷", currency: "EUR" },
    { name: "Grenada", code: "+1-473", flag: "🇬🇩", currency: "XCD" },
    { name: "Guatemala", code: "+502", flag: "🇬🇹", currency: "GTQ" },
    { name: "Guinea", code: "+224", flag: "🇬🇳", currency: "GNF" },
    { name: "Guinea-Bissau", code: "+245", flag: "🇬🇼", currency: "XOF" },
    { name: "Guyana", code: "+592", flag: "🇬🇾", currency: "GYD" },
    { name: "Haiti", code: "+509", flag: "🇭🇹", currency: "HTG" },
    { name: "Honduras", code: "+504", flag: "🇭🇳", currency: "HNL" },
    { name: "Hungary", code: "+36", flag: "🇭🇺", currency: "HUF" },
    { name: "Iceland", code: "+354", flag: "🇮🇸", currency: "ISK" },
    { name: "India", code: "+91", flag: "🇮🇳", currency: "INR" },
    { name: "Indonesia", code: "+62", flag: "🇮🇩", currency: "IDR" },
    { name: "Iran", code: "+98", flag: "🇮🇷", currency: "IRR" },
    { name: "Iraq", code: "+964", flag: "🇮🇶", currency: "IQD" },
    { name: "Ireland", code: "+353", flag: "🇮🇪", currency: "EUR" },
    { name: "Israel", code: "+972", flag: "🇮🇱", currency: "ILS" },
    { name: "Italy", code: "+39", flag: "🇮🇹", currency: "EUR" },
    { name: "Jamaica", code: "+1-876", flag: "🇯🇲", currency: "JMD" },
    { name: "Japan", code: "+81", flag: "🇯🇵", currency: "JPY" },
    { name: "Jordan", code: "+962", flag: "🇯🇴", currency: "JOD" },
    { name: "Kazakhstan", code: "+7", flag: "🇰🇿", currency: "KZT" },
    { name: "Kenya", code: "+254", flag: "🇰🇪", currency: "KES" },
    { name: "Kiribati", code: "+686", flag: "🇰🇷", currency: "AUD" },
    { name: "Kuwait", code: "+965", flag: "🇰🇼", currency: "KWD" },
    { name: "Kyrgyzstan", code: "+996", flag: "🇰🇬", currency: "KGS" },
    { name: "Laos", code: "+856", flag: "🇱🇦", currency: "LAK" },
    { name: "Latvia", code: "+371", flag: "🇱🇻", currency: "EUR" },
    { name: "Lebanon", code: "+961", flag: "🇱🇧", currency: "LBP" },
    { name: "Lesotho", code: "+266", flag: "🇱🇸", currency: "LSL" },
    { name: "Liberia", code: "+231", flag: "🇱🇷", currency: "LRD" },
    { name: "Libya", code: "+218", flag: "🇱🇾", currency: "LYD" },
    { name: "Liechtenstein", code: "+423", flag: "🇱🇮", currency: "CHF" },
    { name: "Lithuania", code: "+370", flag: "🇱🇹", currency: "EUR" },
    { name: "Luxembourg", code: "+352", flag: "🇱🇺", currency: "EUR" },
    { name: "Madagascar", code: "+261", flag: "🇲🇬", currency: "MGA" },
    { name: "Malawi", code: "+265", flag: "🇲🇼", currency: "MWK" },
    { name: "Malaysia", code: "+60", flag: "🇲🇾", currency: "MYR" },
    { name: "Maldives", code: "+960", flag: "🇲🇻", currency: "MVR" },
    { name: "Mali", code: "+223", flag: "🇲🇱", currency: "XOF" },
    { name: "Malta", code: "+356", flag: "🇲🇹", currency: "EUR" },
    { name: "Marshall Islands", code: "+692", flag: "🇲🇭", currency: "USD" },
    { name: "Mauritania", code: "+222", flag: "🇲🇦", currency: "MRU" },
    { name: "Mauritius", code: "+230", flag: "🇲🇺", currency: "MUR" },
    { name: "Mexico", code: "+52", flag: "🇲🇽", currency: "MXN" },
    { name: "Micronesia", code: "+691", flag: "🇫🇲", currency: "USD" },
    { name: "Moldova", code: "+373", flag: "🇲🇩", currency: "MDL" },
    { name: "Monaco", code: "+377", flag: "🇲🇨", currency: "EUR" },
    { name: "Mongolia", code: "+976", flag: "🇲🇳", currency: "MNT" },
    { name: "Montenegro", code: "+382", flag: "🇲🇹", currency: "EUR" },
    { name: "Morocco", code: "+212", flag: "🇲🇦", currency: "MAD" },
    { name: "Mozambique", code: "+258", flag: "🇲🇿", currency: "MZN" },
    { name: "Myanmar", code: "+95", flag: "🇲🇲", currency: "MMK" },
    { name: "Namibia", code: "+264", flag: "🇳🇦", currency: "NAD" },
    { name: "Nauru", code: "+674", flag: "🇳🇷", currency: "AUD" },
    { name: "Nepal", code: "+977", flag: "🇳🇵", currency: "NPR" },
    { name: "Netherlands", code: "+31", flag: "🇳🇱", currency: "EUR" },
    { name: "New Zealand", code: "+64", flag: "🇳🇿", currency: "NZD" },
    { name: "Nicaragua", code: "+505", flag: "🇳🇮", currency: "NIO" },
    { name: "Niger", code: "+227", flag: "🇳🇪", currency: "XOF" },
    { name: "Nigeria", code: "+234", flag: "🇳🇬", currency: "NGN" },
    { name: "North Macedonia", code: "+389", flag: "🇲🇰", currency: "MKD" },
    { name: "Norway", code: "+47", flag: "🇳🇴", currency: "NOK" },
    { name: "Oman", code: "+968", flag: "🇴🇲", currency: "OMR" },
    { name: "Pakistan", code: "+92", flag: "🇵🇰", currency: "PKR" },
    { name: "Palau", code: "+680", flag: "🇵🇼", currency: "USD" },
    { name: "Palestine", code: "+970", flag: "🇵🇸", currency: "ILS" },
    { name: "Panama", code: "+507", flag: "🇵🇦", currency: "PAB" },
    { name: "Papua New Guinea", code: "+675", flag: "🇵🇬", currency: "PGK" },
    { name: "Paraguay", code: "+595", flag: "🇵🇾", currency: "PYG" },
    { name: "Peru", code: "+51", flag: "🇵🇪", currency: "PEN" },
    { name: "Philippines", code: "+63", flag: "🇵🇭", currency: "PHP" },
    { name: "Poland", code: "+48", flag: "🇵🇱", currency: "PLN" },
    { name: "Portugal", code: "+351", flag: "🇵🇹", currency: "EUR" },
    { name: "Qatar", code: "+974", flag: "🇶🇦", currency: "QAR" },
    { name: "Romania", code: "+40", flag: "🇷🇴", currency: "RON" },
    { name: "Russia", code: "+7", flag: "🇷🇺", currency: "RUB" },
    { name: "Rwanda", code: "+250", flag: "🇷🇼", currency: "RWF" },
    { name: "Saint Kitts and Nevis", code: "+1-869", flag: "🇰🇳", currency: "XCD" },
    { name: "Saint Lucia", code: "+1-758", flag: "🇱🇨", currency: "XCD" },
    { name: "Saint Vincent and the Grenadines", code: "+1-784", flag: "🇻🇨", currency: "XCD" },
    { name: "Samoa", code: "+685", flag: "🇼🇸", currency: "WST" },
    { name: "San Marino", code: "+378", flag: "🇸🇲", currency: "EUR" },
    { name: "Sao Tome and Principe", code: "+239", flag: "🇸🇹", currency: "STN" },
    { name: "Saudi Arabia", code: "+966", flag: "🇸🇦", currency: "SAR" },
    { name: "Senegal", code: "+221", flag: "🇸🇳", currency: "XOF" },
    { name: "Serbia", code: "+381", flag: "🇷🇸", currency: "RSD" },
    { name: "Seychelles", code: "+248", flag: "🇸🇨", currency: "SCR" },
    { name: "Sierra Leone", code: "+232", flag: "🇸🇱", currency: "SLL" },
    { name: "Singapore", code: "+65", flag: "🇸🇬", currency: "SGD" },
    { name: "Slovakia", code: "+421", flag: "🇸🇰", currency: "EUR" },
    { name: "Slovenia", code: "+386", flag: "🇸🇮", currency: "EUR" },
    { name: "Solomon Islands", code: "+677", flag: "🇸🇧", currency: "AUD" },
    { name: "Somalia", code: "+252", flag: "🇸🇴", currency: "SOS" },
    { name: "South Africa", code: "+27", flag: "🇿🇦", currency: "ZAR" },
    { name: "South Korea", code: "+82", flag: "🇰🇷", currency: "KRW" },
    { name: "South Sudan", code: "+211", flag: "🇸🇸", currency: "SSP" },
    { name: "Spain", code: "+34", flag: "🇪🇸", currency: "EUR" },
    { name: "Sri Lanka", code: "+94", flag: "🇱🇰", currency: "LKR" },
    { name: "Sudan", code: "+249", flag: "🇸🇩", currency: "SDG" },
    { name: "Suriname", code: "+597", flag: "🇸🇷", currency: "SRD" },
    { name: "Sweden", code: "+46", flag: "🇸🇪", currency: "SEK" },
    { name: "Switzerland", code: "+41", flag: "🇨🇭", currency: "CHF" },
    { name: "Syria", code: "+963", flag: "🇸🇾", currency: "SYP" },
    { name: "Taiwan", code: "+886", flag: "🇹🇼", currency: "TWD" },
    { name: "Tajikistan", code: "+992", flag: "🇹🇯", currency: "TJS" },
    { name: "Tanzania", code: "+255", flag: "🇹🇿", currency: "TZS" },
    { name: "Thailand", code: "+66", flag: "🇹🇭", currency: "THB" },
    { name: "Togo", code: "+228", flag: "🇹🇬", currency: "XOF" },
    { name: "Tonga", code: "+676", flag: "🇹🇴", currency: "TOP" },
    { name: "Trinidad and Tobago", code: "+1-868", flag: "🇹🇹", currency: "TTD" },
    { name: "Tunisia", code: "+216", flag: "🇹🇳", currency: "TND" },
    { name: "Turkey", code: "+90", flag: "🇹🇷", currency: "TRY" },
    { name: "Turkmenistan", code: "+993", flag: "🇹🇲", currency: "TMT" },
    { name: "Tuvalu", code: "+688", flag: "🇹🇻", currency: "AUD" },
    { name: "Uganda", code: "+256", flag: "🇺🇬", currency: "UGX" },
    { name: "Ukraine", code: "+380", flag: "🇺🇦", currency: "UAH" },
    { name: "United Arab Emirates", code: "+971", flag: "🇦🇪", currency: "AED" },
    { name: "United Kingdom", code: "+44", flag: "🇬🇧", currency: "GBP" },
    { name: "United States", code: "+1", flag: "🇺🇸", currency: "USD" },
    { name: "Uruguay", code: "+598", flag: "🇺🇾", currency: "UYU" },
    { name: "Uzbekistan", code: "+998", flag: "🇺🇿", currency: "UZS" },
    { name: "Vanuatu", code: "+678", flag: "🇻🇺", currency: "VUV" },
    { name: "Vatican City", code: "+379", flag: "🇻🇦", currency: "EUR" },
    { name: "Venezuela", code: "+58", flag: "🇻🇪", currency: "VES" },
    { name: "Vietnam", code: "+84", flag: "🇻🇳", currency: "VND" },
    { name: "Yemen", code: "+967", flag: "🇾🇪", currency: "YER" },
    { name: "Zambia", code: "+260", flag: "🇿🇲", currency: "ZMW" },
    { name: "Zimbabwe", code: "+263", flag: "🇿🇼", currency: "ZWL" }
  ];
  
  
  
  export const getLastColorCode=(gradientString)=>{
    // Use a regular expression to match hex color codes
    const colorCodes = gradientString.match(/#[a-fA-F0-9]{3,6}/g);
    
    // If there are matches, return the last one; otherwise, return null
    return colorCodes ? colorCodes[colorCodes.length - 2] : null;
  }


  export const  betDateFormat=(dateInput)=>{
      // Ensure the input is a Date object
      const date = new Date(dateInput);
  
      // Check for invalid date
      if (isNaN(date)) {
          throw new Error("Invalid date input");
      }
  
      const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
      const day = date.getDate();
      const month = months[date.getMonth()];
      const year = date.getFullYear();
      let hours = date.getHours();
      const minutes = date.getMinutes().toString().padStart(2, "0");
      const period = hours >= 12 ? "PM" : "AM";
  
      hours = hours % 12 || 12; // Convert to 12-hour format
  
      return `${day} ${month} ${year} ${hours}:${minutes} ${period}`;
  }
// Example usage:
// const now = new Date("2024-10-23T21:48:21Z");
// console.log(betDateFormat(now));