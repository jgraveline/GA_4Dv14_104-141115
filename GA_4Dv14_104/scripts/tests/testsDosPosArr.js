﻿//	debugger;	var dosPosArr = [],		allDosPosInt = ds.DosPosInt_A.query('INT_ID == 14 and DPI_Statut == 0');	allDosPosInt.forEach(function(dpi)		{			var socEntity = dpi.Lien_DOSPOS_DPI.Lien_DOS_DOSPOS.Lien_SOC_DOSPOS,				dosEntity = dpi.Lien_DOSPOS_DPI.Lien_DOS_DOSPOS,				posEntity = dpi.Lien_DOSPOS_DPI.Lien_POS_DOSPOS,				socStatut = socEntity.STATSOC_ID,				socRScourte = socEntity.SOC_RS_Courte,				dosStatut = dosEntity.DOS_Statut,				dosLibelle = dosEntity.DOS_Libelle,				dosNumero = dpi.Lien_DOSPOS_DPI.Lien_DOS_DOSPOS.DOS_Numero,				posStatut = posEntity.POS_Statut;				posCode = posEntity.POS_Code,				dosPosChoice = socRScourte + ' / ' + dosLibelle + ' - ' + dosNumero + ' / ' + posCode;			if ((socStatut == 1) & (dosStatut == 0) & (posStatut == 0)) { //societe, dossier et poste valide				dosPosArr.push({label : dosPosChoice, ID : dpi.DPI_ID});				}		});    dosPosArr.sort();    dosPosArr;