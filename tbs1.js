// เลือก element input
const inputBox = document.getElementById('input-box');
const resultBox = document.querySelector('.result-box');

// สร้าง array ของข้อมูลตัวอย่างสำหรับ auto-complete
const subjects = [
  "AC201",
  "AC311",
  "BA201",
  "OM201",
  "IS201",
  // เพิ่มรายวิชาอื่น ๆ ตามต้องการ
];

// เมื่อผู้ใช้ประมวลผล input
inputBox.addEventListener('input', function() {
  const inputText = inputBox.value.toLowerCase();
  resultBox.innerHTML = ''; // ล้างข้อมูลเก่าทุกครั้งที่ประมวลผล

  if (inputText) {
    const filteredSubjects = subjects.filter(subject => subject.toLowerCase().includes(inputText));

    if (filteredSubjects.length > 0) {
      filteredSubjects.forEach(subject => {
        const suggestion = document.createElement('div');
        suggestion.textContent = subject;
        suggestion.className = 'suggestion';
        resultBox.appendChild(suggestion);

        suggestion.addEventListener('click', function() {
          inputBox.value = subject;
          resultBox.innerHTML = '';

          // สามารถเพิ่มการดำเนินการเพิ่มเติมเมื่อเลือก suggestion ได้ที่นี่
        });
      });
    } else {
      const noResult = document.createElement('div');
      noResult.textContent = 'ไม่พบผลลัพธ์';
      noResult.className = 'no-result';
      resultBox.appendChild(noResult);
    }
  }
});

// หากผู้ใช้คลิกที่พื้นหลังหรือคุณลึกที่ input box
document.addEventListener('click', function(e) {
  if (e.target !== inputBox) {
    resultBox.innerHTML = '';
  }
});