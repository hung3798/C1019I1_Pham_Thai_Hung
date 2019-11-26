function kiTuDauTienInHoa(string) {
    let regex = /^[0-9]$/;
    if (regex.test(string)) {
        alert("nhap lai")
    }else {
        alert("nhap dung")
    }
}