var operation_object = $("#op-name");
var turingtype_object = $("#tm-type");
var operation_castings = {
    0: [""],
    penjumlahan: ["2-tapes", "3-tracks"],
    pengurangan: ["2-tapes", "3-tracks"],
    perkalian: ["3-tapes", "3-tracks"],
    pembagian: ["3-tapes", "4-tracks"],
    faktorial: ["4-tracks"],
    pangkat: ["4-tapes"],
    logaritma: ["4-tapes Unary -> Unary", "2-tracks Binary -> Unary"],
    akarKuadrat: ["3-tracks"],
    test: ["test-tracks"],
};

function setOperasiTuring() {
    if (turingtype_object.val() == "") {
        alert("You need to choose your operation!");
    } else {
        Operation.loadOperationName(operation_object.val(), turingtype_object.val());
    }
}

function gantiOperasiTuring() {
    for (const prop in operation_castings) {
        if (operation_object.val() == prop) {
            var turingtype_arr = operation_castings[prop];
            turingtype_object.empty();
            if (prop == 0) {
                turingtype_object.prepend(`<option selected value="">Pick your operation first</option>`);
            } else {
                var is_first_entry = true;
                for (const item of turingtype_arr) {
                    if (is_first_entry) {
                        turingtype_object.append(`<option selected value="${item}">${parseSelectCode(item)}</option>`);
                        is_first_entry = false;
                    } else {
                        turingtype_object.append(`<option value="${item}">${parseSelectCode(item)}</option>`);
                    }
                }
            }
        }
    }
}

function parseSelectCode(string) {
    var retstring = string.replace("-", " ");
    return retstring.replace(/\w\S*/g, function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}

function translateSingleOperation() {
    Operation.translateSingleOperation();
}

function translateDoubleOperation() {
    Operation.translateDoubleOperation();
}

function mulaiTuringMachine() {
    Operation.prepare();
}

function turingStart() {
    Operation.run();
}

function turingDoneHandler(accepted, output) {
    Operation.handleDone(accepted, output);
}

$(() => {});
