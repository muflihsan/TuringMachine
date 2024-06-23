function translatePenjumlahan(num) {
    var intNum = parseInt(num);
    if (intNum > 0) {
        return repeat("0", intNum);
    } else {
        return repeat("M", -intNum);
    }
}

function translatePembagian3Tapes(num) {
    var intNum = parseInt(num);
    if (intNum > 0) {
        return String("+") + repeat("0", intNum);
    } else if (!intNum) {
        return String("");
    } else {
        return String("-") + repeat("0", -intNum);
    }
}

function translatePangkat(num) {
    var intNum = parseInt(num);
    if (intNum < 0) {
        return String("");
    } else if (intNum == 0) {
        return String("1");
    } else {
        return repeat("0", intNum - 1);
    }
}

function translateakarKuadrat(num) {
    var intNum = parseInt(num);
    if (intNum < 0) {
        return "Tidak Valid";
    } else if (intNum === 0) {
        return "0";
    } else {
        var i = 0;
        while (i * i <= intNum) {
            i++;
        }
        return (i - 1).toString();
    }
}

function toTitleCase(str) {
    return str.replace(/\w\S*/g, function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}

function binary(decimal) {
    var decInt = parseInt(decimal);
    var bin = decInt.toString(2);
    if (bin == "NaN") {
        return String("");
    }
    return String(bin);
}

function equals(item, array) {
    for (const elem of array) {
        if (item == elem) return true;
    }
    return false;
}

function repeat(item, times) {
    intTimes = parseInt(times);
    strItem = String(item);
    var ret = "";
    for (var i = 0; i < intTimes; i++) {
        ret += strItem;
    }
    return ret;
}

function generateRawOutputs(arr) {
    var i = 0;
    for (const elem of arr) {
        _generateRawOutputs(elem, i);
        i++;
    }
}

function _generateRawOutputs(result, arrIndex) {
    $("#turingResultItemContainer").append(createRawOutput(result, arrIndex + 1));
}

function createRawOutput(result, tapeIndex) {
    var template = `
        <div class="d-flex flex-row mb-2 w-100" id="turingResultItem">
            <div class="me-2">[${tapeIndex}]</div>
            <div class="w-100">
                <div class="input-group input-group-sm">
                    <input type="text" class="form-control form-control-sm" value="${result}" disabled />
                    <span class="input-group-text">${result.length}</span>
                </div>
            </div>
        </div>
    `;
    return template;
}

var operationSymbolCastings = {
    penjumlahan: "+",
    pengurangan: "-",
    perkalian: "x",
    pembagian: "/",
    pangkat: "^",
    akarKuadrat: "*",
    test: "x",
};

class Operation {
    static operationName = "";
    static turingType = "";
    static rule = "";
    static machine = null;

    static inputField = $("#operationInputValue");
    static outputField = $(".operationTranslated");
    static leftInput = $("#operationLhs");
    static rightInput = $("#operationRhs");

    static loadOperationName(name, type) {
        this.operationName = name;
        this.turingType = type;
        console.log("Loading", this.operationName, "-", this.turingType);
        this.prepareView();
    }

    static prepareView() {
        $("#operationPicker").addClass("d-none");
        $("#resetField").removeClass("d-none");
        this.prepareMachine();
    }

    static prepareMachine() {
        if (this.operationName == "test") {
            if (this.turingType == "test-tracks") {
                this.rule = turingRule_test;
            }
        } else if (this.operationName == "penjumlahan") {
            if (this.turingType == "3-tracks") {
                this.rule = penjumlahan_3track;
            } else if (this.turingType == "2-tapes") {
                this.rule = penjumlahan_2tapes;
            }
        } else if (this.operationName == "pengurangan") {
            if (this.turingType == "2-tapes") {
                this.rule = pengurangan_2tapes;
            } else if (this.turingType == "3-tracks") {
                this.rule = pengurangan_3tracks;
            }
        } else if (this.operationName == "perkalian") {
            if (this.turingType == "3-tracks") {
                this.rule = perkalian_3tracks;
            } else if (this.turingType == "3-tapes") {
                this.rule = perkalian_3tapes;
            }
        } else if (this.operationName == "pembagian") {
            if (this.turingType == "3-tapes") {
                this.rule = pembagian_3tapes;
            } else if (this.turingType == "4-tracks") {
                this.rule = pembagian_4tracks;
            }
        } else if (this.operationName == "faktorial") {
            if (this.turingType == "4-tracks") {
                this.rule = faktorial_4tracks;
            }
        } else if (this.operationName == "pangkat") {
            if (this.turingType == "4-tapes") {
                this.rule = pangkat_4tapes;
            }
        } else if (this.operationName == "logaritma") {
            if (this.turingType == "4-tapes Unary -> Unary") {
                this.rule = logbiner_4tapes_unarytounary;
            } else if (this.turingType == "2-tracks Binary -> Unary") {
                this.rule = logbiner_2tracks_binarytounary;
            }
        } else if (this.operationName == "akarKuadrat") {
            if (this.turingType == "3-tracks") {
                this.rule = akar_kuadrat_3tapes;
            } 
        } else {
            alert("Machine not found! Exiting...");
            window.location.reload();
        }
        this.prepareInput();
    }

    static prepareInput() {
        if (equals(this.operationName, ["logaritma", "faktorial", "akarKuadrat"])) {
            $("#oneOperation").removeClass("d-none");
        } else {
            $("#twoOperation").removeClass("d-none");
        }

        var labelHeading = "";
        if (this.operationName == "logaritma") {
            labelHeading = "Logaritma Biner";
        } 
        else if (this.operationName == "akarKuadrat") {
            labelHeading = "Akar Kuadrat";
        }
        else {
            $("#labelOperasiTuring").text(toTitleCase(this.operationName));
        }

        for (const prop in operationSymbolCastings) {
            if (this.operationName == prop) {
                $("#simbolOperasi").text(operationSymbolCastings[prop]);
            }
        }
    }

    static translateSingleOperation() {
        if (this.operationName == "faktorial") {
            this.outputField.val(repeat("0", this.inputField.val()) + "1");
        } else if (this.operationName == "logaritma") {
            if (this.turingType == "2-tracks Binary -> Unary") {
                this.outputField.val(binary(this.inputField.val()));
            } else {
                this.outputField.val("001" + repeat("0", this.inputField.val()));
            }
        } else if (this.operationName == "akarKuadrat") {
            this.outputField.val("1" + repeat("0", this.inputField.val()));
        }
    }

    static translateDoubleOperation() {
        if (equals(this.operationName, ["penjumlahan", "pengurangan", "perkalian", "pembagian"])) {
            if (this.operationName == "pembagian") {
                if (this.turingType == "3-tapes") {
                    this.outputField.val(translatePembagian3Tapes(this.leftInput.val()) + "1" + translatePembagian3Tapes(this.rightInput.val()));
                } else if (this.turingType == "4-tracks") {
                    this.outputField.val(translatePenjumlahan(this.leftInput.val()) + "1" + translatePenjumlahan(this.rightInput.val()));
                }
            } else {
                this.outputField.val(translatePenjumlahan(this.leftInput.val()) + "1" + translatePenjumlahan(this.rightInput.val()));
            }
        } else if (this.operationName == "pangkat") {
            this.outputField.val(repeat("0", this.leftInput.val()) + "1" + translatePangkat(this.rightInput.val()));
        } else if (this.operationName == "test") {
            this.outputField.val(binary(this.leftInput.val()) + "#" + binary(this.rightInput.val()));
        }
    }

    static prepare() {
        if (this.rule == "") {
            alert("Rule not established! Exiting...");
            window.location.reload();
        } else {
            this.machine = new Machine();
            this.machine.prepareToRun(this.rule, this.outputField.val(), this.operationName + " - " + this.turingType);

            $("#oneOperation").addClass("d-none");
            $("#twoOperation").addClass("d-none");
            $("#ButtonMulaiTuringMach").removeClass("d-none");
        }
    }

    static run() {
        $("#ButtonMulaiTuringMach").addClass("disabled");
        this.machine.run();
    }

    static handleDone(accepted, output) {
        $("#ButtonMulaiTuringMach").addClass("d-none");
        if (accepted == true) {
            $("#hasilTuringMachineReject").addClass("d-none");
        } else {
            $("#hasilTuringMachineAccept").addClass("d-none");
        }

        generateRawOutputs(output);
        $("#turingResultSection").removeClass("d-none");
    }
}

$(() => {});
