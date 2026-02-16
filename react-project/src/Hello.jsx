function Hello() {
    let myName = 'AKash';
    let number = 456;
    let fullName = () => {
        return 'Akash Singh Parihar';
    }
    return <p>
        MessageNo: {number} I am your master {fullName()}
    </p>
}

export default Hello;