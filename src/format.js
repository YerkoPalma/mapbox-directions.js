'use strict';

module.exports = {
    duration: function (s) {
        var m = Math.floor(s / 60),
            h = Math.floor(m / 60);
        s %= 60;
        m %= 60;
        if (h === 0 && m === 0) return s + ' s';
        if (h === 0) return m + ' min';
        return h + ' h ' + m + ' min';
    },

    imperial: function (m) {
        var mi = m / 1609.344;
        if (mi >= 100) return mi.toFixed(0) + ' mi';
        if (mi >= 10) return mi.toFixed(1) + ' mi';
        if (mi >= 0.1) return mi.toFixed(2) + ' mi';
        return (mi * 5280).toFixed(0) + ' ft';
    },

    metric: function (m) {
        if (m >= 100000) return (m / 1000).toFixed(0) + ' km';
        if (m >= 10000) return (m / 1000).toFixed(1) + ' km';
        if (m >= 100) return (m / 1000).toFixed(2) + ' km';
        return m.toFixed(0) + ' m';
    },
    en: function (m) {
      return m;
    },
    es: function (m) {
       m = m.replace(/\b(N|n)?(orth)\b/g, "Norte");
       m = m.replace(/\b(N|n)?(ortheast)\b/g, "Noreste");
       m = m.replace(/\b(N|n)?(orthwest)\b/g, "Noroeste");
       m = m.replace(/\b(S|s)?(outh)\b/g, "Sur");
       m = m.replace(/\b(S|s)?(outheast)\b/g, "Sureste");
       m = m.replace(/\b(S|s)?(outhwest)\b/g, "Suroeste");
       m = m.replace(/\b(E|e)?(ast)\b/g, "Este");
       m = m.replace(/\b(W|w)?(est)\b/g, "Oeste");
       m = m.replace(/\b(O|o)?(nto)\b/g, "hacia");
       m = m.replace(/\b(O|o)?(n)\b/g, "en");
       m = m.replace(/\b(H|h)?(ead)\b/g, "Siga hacia el");
       m = m.replace(/Turn right/g, "Gire a la derecha");
       m = m.replace(/Bear right/g, "Vuelta a la derecha");
       m = m.replace(/Make a sharp right/g, "Curva brusca a la derecha");
       m = m.replace(/Make a slight right/g, "Curva ligera a la derecha");
       m = m.replace(/Turn left/g, "Gire a la izquierda");
       m = m.replace(/Bear left/g, "Encoste à esquerda");
       m = m.replace(/Go straight/g, "Siga derecho");
       m = m.replace(/Continue left/g, "Continue a la izquierda");
       m = m.replace(/Continue right/g, "Continue a la derecha");
       m = m.replace(/Keep left at the fork/g, "Mantengase a la izquierda en el cruce");
       m = m.replace(/Keep right at the fork/g, "Mantengase a la derecha en el cruce");
       m = m.replace(/Continue slightly right/g, "Continue ligeramente a la derecha");
       m = m.replace(/Continue slightly left/g, "Continue ligeramente a la izquierda");
       m = m.replace(/Make a sharp left/g, "Curva brusca a la izquierda");
       m = m.replace(/Make a slight left/g, "Curva ligera a la izquierda");
       m = m.replace(/Make a slight right/g, "Curva ligera a la derecha");
       m = m.replace(/Continue sharp left/g, "Curva brusca a la izquierda");
       m = m.replace(/Continue sharp right/g, "Curva brusca a la derecha");
       m = m.replace(/Make a sharp right/g, "Curva brusca a la derecha");
       m = m.replace(/Continue straight/g, "Continue derecho");
       m = m.replace(/The right/g, "La derecha");
       m = m.replace(/The left/g, "La izquierda");
       m = m.replace(/\bContinue/g, "Continue");
       m = m.replace(/Make a U-turn/g, "Gire en U");
       m = m.replace(/Enter the roundabout/g, "Entre a la rotonda");
       m = m.replace(/and take the exit/g, "tome esa salida");
       m = m.replace(/You have arrived at your destination/g, "Ha llegado a su destino");
       return m;
    }
};
