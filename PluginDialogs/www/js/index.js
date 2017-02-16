/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // Alert
    alert: function(){

      // Função de callback do alert (Ao clicar no botão OK)
      function alertDismissed() {
          alert('O Utilizador Clicou no Botão OK');
      }

      navigator.notification.alert(
            'Registo Guardado com Sucesso!',  // message
            alertDismissed,                   // callback
            'Sucesso!',                       // title
            'Ok'                              // buttonName
      );
  },
  confirm: function(){

    // Função de callback do confirm (Ao clicar no botão)
    // Recebe o Index do Botão (Sim -> 1, Não -> 2 ..)
    function onConfirm(buttonIndex) {
      alert('O Botão selecionado foi: ' + buttonIndex);
    }

    navigator.notification.confirm(
      'Tem a certeza que quer eliminar x?', // message
      onConfirm,                            // callback to invoke with index of button pressed
      'Confirmação',                        // title
      ['Sim','Não']                         // buttonLabels
    );
  },

  prompt: function(){

    // Função de callback do prompt (Ao clicar no botão)
    // Recebe o Index do Botão (Sim -> 1, Não -> 2 ..) results.buttonIndex
    // Recebe o conteudo que foi escrito results.input1
    function onPrompt(results) {
      alert("O botão selecionado foi: " + results.buttonIndex + " e escreveu: " + results.input1);
    }

    navigator.notification.prompt(
      'Qual o seu nome?',  // message
      onPrompt,                  // callback to invoke
      'Registo Nome',            // title
      ['Ok','Cancelar'],             // buttonLabels
      'Seu nome'                 // defaultText
    );

  },
  beep: function(){
    //Codigo do beep e o numero de beeps
    navigator.notification.beep(2);
  }
};
