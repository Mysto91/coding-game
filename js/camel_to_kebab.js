function camelToKebab(str) {
    return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
}

// Exemple d'utilisation :
const camelCaseStr = "camelCaseString";
const kebabCaseStr = camelToKebab(camelCaseStr);
console.log(kebabCaseStr); 