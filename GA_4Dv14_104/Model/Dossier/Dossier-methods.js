﻿model.Dossier.methods.getDossierArr = function() {	//debugger;	var allDos = ds.Dossier.all(); // le résultat dépend de l'utilisateur connecté (model.Dossier.events.restrict)	var dossierArr = [];		dossierArr.push({label : 'Aucun', ID : 0});		allDos.forEach(function(dos)	{		var soc = dos.Lien_SOC_DOSPOS;		var	socStatut = soc.STATSOC_ID;		var	socRScourte = soc.SOC_RS_Courte;		var	dosStatut = dos.DOS_Statut;		var	dosLibelle = dos.DOS_Libelle;		var	dosNumero = dos.DOS_Numero;		var	dosChoice = socRScourte + ' / ' + dosLibelle + ' - ' + dosNumero;		if ((socStatut == 1) & (dosStatut == 0)) { //societe, dossier valide			dossierArr.push({label : dosChoice, ID : dos.DOS_ID});			}	});    dossierArr.sort();		    return dossierArr;};model.Dossier.methods.getDossierArr.scope = "public";