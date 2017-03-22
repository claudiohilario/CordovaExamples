Este repositório tem alguns exemplos de utilização dos diversos plugins a medida que vão sendo estudados.

Instalação
==========

Pela linha de comando no Windows:

```
c:\> npm install -g cordova
```

Pelo terminal do Mac OS X/Linux:

```
$sudo npm install -g cordova
```

Criar um novo projeto
=====================

```
cordova create minhaApp com.minhaEmpresa.minhaApp minhaApp
cd minhaApp
```

Adicionar Plugins 
==================

```
cordova plugin add cordova-plugin-camera --save
```

Adicionar Plataforma
====================

```
cordova platform add android --save
cordova requirements android    
```

Correr aplicação
================

```
cordova run android
```
