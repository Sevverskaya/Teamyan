let inputs = document.querySelectorAll('input[data-rule]');
for (let input of inputs) {
    input.addEventListener('blur', function () {
        let rule = this.dataset.rule;
        let value = this.value;
        let check;

        switch (rule) {
            case 'login':
                check = /^(?=.*[0-9])(?=.*[a-z])[0-9a-z]{7,}$/.test(value);
            break;
            case 'password':
                check = /(?=.*[0-9])(?=.*[a-z])[0-9a-z]{8,}/.test(value);
            break;
            case 'email':
                check = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(value);
            break;

        }
        this.classList.remove('valid');
        this.classList.remove('invalid');
        if (check) {
            this.classList.add('valid');
        } else {
            this.classList.add('invalid');
        }

    })
}
