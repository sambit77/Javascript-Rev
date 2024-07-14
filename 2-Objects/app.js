const student = {

    fullName: "Sambit Pradhan",
    marks: 94.6,
    printMarks: function () {
        console.log("Marks = "+ this.marks);
    }
};

const employee = {
    calcOldTaxRegime()
    {
        console.log("Tax rate is 10%");
    },
    calcNewTaxRegime : function () {
        console.log("tax rate is 10%");
    }
};

const KaranArjun = {
    salary: 50000,
    calcNewTaxRegime()
    {
        console.log("updated tax rate is 20%");
    }
};
KaranArjun.__proto__ = employee;
 