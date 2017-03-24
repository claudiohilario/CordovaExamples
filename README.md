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
cordova plugin add [<plugin>] --save
```
Ver Lista de Plugins 
==================
```
cordova plugin list
```
Remover Plugin 
==================
```
cordova plugin remove [<plugin_name>]
```

Adicionar Plataforma
====================

```
cordova platform add [<platform>] --save
cordova requirements [<platform>]    
```

Remover Plataforma
====================

```
cordova platform remove [<platform>]
cordova platform rm [<platform>]  
```

Correr aplicação
================

```
cordova build [<platform>] --verbose
cordova run [<platform>]
```
