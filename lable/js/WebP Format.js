document.addEventListener("DOMContentLoaded", function() {
    // Kiểm tra xem trình duyệt có hỗ trợ navigator.connection không
    if (navigator.connection) {
        // Lấy loại kết nối mạng hiện tại
        const connectionType = navigator.connection.effectiveType;

        // Danh sách các loại kết nối mạng có băng thông thấp
        const lowBandwidthConnections = ['slow-2g', '2g', '3g'];

        // Kiểm tra xem kết nối mạng có trong danh sách băng thông thấp hay không
        if (lowBandwidthConnections.includes(connectionType)) {
            // Nếu kết nối mạng có băng thông thấp, thực hiện tải hình ảnh ở dung lượng thấp hơn
            document.getElementById('myImage').src = 'low_resolution_image.jpg';
        } else {
            // Nếu không phải kết nối mạng có băng thông thấp, tải hình ảnh ở dung lượng cao
            document.getElementById('myImage').src = 'high_resolution_image.jpg';
        }
    } else {
        // Trường hợp trình duyệt không hỗ trợ navigator.connection
        // Giả định rằng kết nối mạng là băng thông cao và tải hình ảnh ở dung lượng cao
        document.getElementById('myImage').src = 'high_resolution_image.jpg';
    }
});
