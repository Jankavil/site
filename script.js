let lessonInput = document.querySelector('#lesson');
let teacherInput = document.querySelector('#teacher');
let buttonInput = document.querySelector('#btn');

var o = new Option('option text');
var i = new Option('option text');
var z = new Option('option text');
var x = new Option('option text');

function checkValue1 (value) {
    if(value == 'Programesana'){
            $(o).html('Olga Macko');
            $('#teacher').append(o);
        }
    }

function checkValue2 (value) {
    if(value == 'Latviesu_valoda'){
        $(o).html('Ināra Žukovska');
        $('#teacher').append(o);
        $(i).html('Ināra Locika');
        $('#teacher').append(i);
        $(z).html('Madara Bokāne');
        $('#teacher').append(z);
        $(x).html('Ingrīda Kondratjeva');
        $('#teacher').append(x);
    }
}

function checkvalue3 (value) {
    if(value == 'Matematika'){
        $(o).html('Iveta Nikolajeva');
        $('#teacher').append(o);
        $(i).html('Neļa Borisova');
        $('#teacher').append(i);
        $(z).html('Tatjana Garbuza');
        $('#teacher').append(z);
        $(x).html('Svetlana Proščinko');
        $('#teacher').append(x);
    }
}
function checkvalue4 (value) {
    if(value == 'Anglu_valoda'){
        $(o).html('Eva Vovka');
        $('#teacher').append(o);
        $(i).html('Rita Murāne-Rutka');
        $('#teacher').append(i);
        $(z).html('Alīna Caune');
        $('#teacher').append(z);
    }
}
function checkvalue5 (value) {
    if(value == 'Vacu_valoda'){
        $(o).html('Renāte Malnace');
        $('#teacher').append(o);
        $(i).html('Olga Osipova');
        $('#teacher').append(i);
    }
}
function checkvalue6 (value) {
    if(value == 'Krievu_valoda'){
        $(o).html('Anna Gasina');
        $('#teacher').append(o);
        $(i).html('Valentīna Prokofjeva');
        $('#teacher').append(i);
    }
}
function checkvalue7 (value) {
    if(value == 'Sports'){
        $(o).html('Deniss Kovaļenko');
        $('#teacher').append(o);
        $(i).html('Anita Vilcāne');
        $('#teacher').append(i);
    }
}
function checkvalue8 (value) {
    if(value == 'VSZ'){
        $(o).html('Signita Gabrāne');
        $('#teacher').append(o);
        $(i).html('Aiga Hudobčenoka');
        $('#teacher').append(i);
        $(z).html('Zigrīda Rusiņa');
        $('#teacher').append(z);
    }
}
function checkvalue9 (value) {
    if(value == 'Kimija'){
        $(o).html('Irina Fjodorova');
        $('#teacher').append(o);
    }
}
function checkvalue1_0 (value) {
    if(value == 'Fizika'){
        $(o).html('Tatjana Garbuza');
        $('#teacher').append(o);
        $(i).html('Marina Pilace');
        $('#teacher').append(i);
    }
}
function checkvalue1_1 (value) {
    if(value == 'Dabas_zinibas'){
        $(o).html('Jelena Kolesnikova');
        $('#teacher').append(o);
    }
}
function checkvalue1_2 (value) {
    if(value == 'Literatura'){
        $(o).html('Ināra Žukovska');
        $('#teacher').append(o);
        $(i).html('Ināra Locika');
        $('#teacher').append(i);
        $(z).html('Madara Bokāne');
        $('#teacher').append(z);
        $(x).html('Ingrīda Kondratjeva');
        $('#teacher').append(x);
    }
}
function checkvalue1_3 (value) {
    if(value == 'Francu_valoda'){
        $(o).html('Ludmila Čirkste');
        $('#teacher').append(o);
    }
}
function checkvalue1_4 (value) {
    if(value == 'Geografija'){
        $(o).html('Valērijs Dudeničs');
        $('#teacher').append(o);
    }
}
function checkvalue1_5 (value) {
    if(value == 'Vizuala_maksla'){
        $(o).html('Līga Midere-Davidčuka');
        $('#teacher').append(o);
    }
}
function checkvalue1_6 (value) {
    if(value == 'Muzika'){
        $(o).html('Anita Zarāne');
        $('#teacher').append(o);
    }
}
function checkvalue1_7 (value) {
    if(value == 'Inzinier_zinatnes'){
        $(o).html('Tatjana Garbuza');
        $('#teacher').append(o);
    }
}
function checkvalue1_8 (value) {
    if(value == 'Latvijas_vesture'){
        $(i).html('Aiga Hudobčenoka');
        $('#teacher').append(i);
        $(z).html('Zigrīda Rusiņa');
        $('#teacher').append(z);
    }
}
function checkvalue1_9 (value) {
    if(value == 'Pasaules_vesture'){
        $(i).html('Aiga Hudobčenoka');
        $('#teacher').append(i);
        $(z).html('Zigrīda Rusiņa');
        $('#teacher').append(z);
    }
}
function checkvalue2_0 (value) {
    if(value == 'Majturiba'){
        $(o).html('Rita Ostapko');
        $('#teacher').append(o);
    }
}
function checkvalue2_1 (value) {
    if(value == 'Socialas_zinibas'){
        $(o).html('Aiga Hudobčenoka');
        $('#teacher').append(o);
        $(i).html('Signita Gabrāne');
        $('#teacher').append(i);
    }
}
function checkvalue2_2 (value) {
    if(value == 'Dizains_tehnologija'){
        $(o).html('Rita Ostapko');
        $('#teacher').append(o);
    }
}
function checkvalue2_3 (value) {
    if(value == 'Datorika'){
        $(o).html('Dace Ozerska');
        $('#teacher').append(o);
    }
}
function checkvalue2_4 (value) {
    if(value == 'Latvijas_pasaules'){
        $(i).html('Aiga Hudobčenoka');
        $('#teacher').append(i);
        $(z).html('Zigrīda Rusiņa');
        $('#teacher').append(z);
    }
}
function checkvalue2_5 (value) {
    if(value == 'Kulturas_pamati'){
        $(o).html('Anita Zarāne');
        $('#teacher').append(o);
    }
}
function checkvalue2_6 (value) {
    if(value == 'DZVP'){
        $(o).html('Rita Murāne-Rutka');
        $('#teacher').append(o);
    }
}
function checkvalue2_7 (value) {
    if(value == 'MZVP'){
        $(o).html('Iveta Nikolajeva');
        $('#teacher').append(o);
    }
}
function checkvalue2_8 (value) {
    if(value == 'Ekonomika'){
        $(o).html('Marina Pilace');
        $('#teacher').append(o);
    }
}
function checkvalue2_9 (value) {
    if(value == 'Politika_tiesibas'){
        $(o).html('Zigrīda Rusiņa');
        $('#teacher').append(o);
    }
}
function checkvalue3_0 (value) {
    if(value == 'Biologija'){
        $(o).html('Marina Aleksandrova');
        $('#teacher').append(o);
        $(i).html('Valērijs Dudeničs');
        $('#teacher').append(i);
    }
}

teacherInput.addEventListener('click', function(){
    checkValue1(lessonInput.value);
    checkValue2(lessonInput.value);
    checkvalue3(lessonInput.value);
    checkvalue4(lessonInput.value);
    checkvalue5(lessonInput.value);
    checkvalue6(lessonInput.value);
    checkvalue7(lessonInput.value);
    checkvalue8(lessonInput.value);
    checkvalue9(lessonInput.value);
    checkvalue1_0(lessonInput.value);
    checkvalue1_1(lessonInput.value);
    checkvalue1_2(lessonInput.value);
    checkvalue1_3(lessonInput.value);
    checkvalue1_4(lessonInput.value);
    checkvalue1_5(lessonInput.value);
    checkvalue1_6(lessonInput.value);
    checkvalue1_7(lessonInput.value);
    checkvalue1_8(lessonInput.value);
    checkvalue1_9(lessonInput.value);
    checkvalue2_0(lessonInput.value);
    checkvalue2_1(lessonInput.value);
    checkvalue2_2(lessonInput.value);
    checkvalue2_3(lessonInput.value);
    checkvalue2_4(lessonInput.value);
    checkvalue2_5(lessonInput.value);
    checkvalue2_6(lessonInput.value);
    checkvalue2_7(lessonInput.value);
    checkvalue2_8(lessonInput.value);
    checkvalue2_9(lessonInput.value);
    checkvalue3_0(lessonInput.value);
})
