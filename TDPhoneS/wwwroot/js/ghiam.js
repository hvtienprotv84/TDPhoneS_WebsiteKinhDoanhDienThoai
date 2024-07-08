
    window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();

                        document.addEventListener('DOMContentLoaded', () => {
                            const input = document.getElementById('input');
                           
                        })
                        // Bổ sung mã JavaScript sau phần HTML để xử lý sự kiện ghi âm trong popup
                        document.addEventListener('DOMContentLoaded', () => {
                            const startRecordingBtn = document.getElementById('startRecordingBtn');

    // Bắt sự kiện bàn phím
    document.addEventListener("keydown", function (event) {
                                // Sử dụng keyCode hoặc key để kiểm tra phím bấm
                                if (event.keyCode === 13 || event.key === "enter") {
        // Kích hoạt sự kiện click trên nút "Bắt đầu ghi âm"
        startRecordingBtn.click();
                                }
                            });

                            startRecordingBtn.addEventListener('click', () => {
        recognition.start();
                            });

                            
                            recognition.addEventListener('start', () => {
        startRecordingBtn.textContent = 'Đang ghi âm...';
                            });

                            //recognition.addEventListener("start", () => {
        // Thay đổi nội dung của nút thành hình ảnh
        //startRecordingBtn.innerHTML = '<img src="https://w7.pngwing.com/pngs/853/826/png-transparent-computer-icons-conversation-speech-learning-education-speaking-miscellaneous-orange-presentation.png" alt="Đang ghi âm...">';
        //});

        recognition.addEventListener('end', () => {
            startRecordingBtn.textContent = 'Bắt đầu ghi âm';
        });

                            recognition.addEventListener('result', (event) => {
                                const transcript = event.results[0][0].transcript;
    input.value = transcript;

    if (transcript.toLowerCase() === 'home') {
        window.location.href = '/';
                                }
    else if (transcript.toLowerCase() === 'chat') {
        window.location.href = '/ChatAI';
                                }
    else if (transcript.toLowerCase() === 'about') {
        window.location.href = '/About';
                                }
    else if (transcript.toLowerCase() === 'login') {
        window.location.href = '/Login';
                                }
    else if (transcript.toLowerCase() === 'map') {
        window.location.href = '/GoogleMap';
    }
    });
});