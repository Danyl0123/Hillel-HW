const pow = (num, degree) => (degree === 1 ? num : num * pow(num, degree - 1));
