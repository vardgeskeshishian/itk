function lengthOfLastWord(s) {
    // Убираем лишние пробелы в начале и в конце
    s = s.trim();
    
    // Разделяем строку на слова
    const words = s.split(' ');
    
    // Возвращаем длину последнего слова
    return words[words.length - 1].length;
}

console.log(lengthOfLastWord('   fly me   to   the moon  '));
