$( document ).ready(function() {

      var restartButtonHTML = '<button class="round left" id="wizard_recommencer"><i class="fa fa-undo fa-2x" aria-hidden="true"></i><br />Recommencer le wizard</button>';
      
      $('#wizard').html(restartButtonHTML);
      $('#wizard_recommencer').click(function() {
          wizard();
      });

      var wizard_query_positive = [];
      var wizard_query_negative = [];
      wizard();

      function wizard() {
        $('#wizard').html('<button id="wizard_cheminer"><i class="fa fa-sitemap fa-2x" aria-hidden="true"></i><br />Laissez-moi cheminer</button><br/>' +
		'<a href="random"><button id="wizard_toctoctoque"><i class="fa fa-lightbulb-o fa-2x" aria-hidden="true"></i><br />Je suis toc Toc Toqué !</button></a>');
        $('#wizard_cheminer').click(function() {
          wizard_cheminer();
        });
      }

      function wizard_cheminer() {
        $('#wizard').html('<button id="wizard_entree">entrée</button><br/><button id="wizard_plat">plat</button><br/><button id="wizard_dessert">dessert</button><br/>' + restartButtonHTML);
        $('#wizard_entree').click(function() {
          wizard_entree();
        });
        $('#wizard_plat').click(function() {
          wizard_plat();
        });
        $('#wizard_dessert').click(function() {
          wizard_dessert();
        });

        $('#wizard_recommencer').click(function() {
          wizard();
        });
        
      }

      /* ENTREE */
      function wizard_entree() {
        $('#wizard').html('<button id="wizard_potage">potage</button><br/>' + restartButtonHTML);
        $('#wizard_potage').click(function() {
          wizard_query_positive.push("potage");
          document.getElementById('positive').value = " " + wizard_query_positive.join(', ') + " ";
          document.getElementById('negative').value = " " + wizard_query_negative.join(', ') + " ";
		  wizard_fin();
        });

        $('#wizard_recommencer').click(function() {
          wizard();
        });
      }
	  
	  function wizard_fin() {
        $('#wizard').html(restartButtonHTML);
        $('#wizard_recommencer').click(function() {
          wizard();
        });
      }

      /*PLAT*/
      function wizard_plat() {
        $('#wizard').html('<button id="wizard_viande">viande</button><br/><button id="wizard_poisson_fruit_mer">poisson ou fruit de mer</button><br/><button id="wizard_veggie">végétarien</button><br/>' + restartButtonHTML);
        $('#wizard_viande').click(function() {
          wizard_viande();
        });
        $('#wizard_poisson_fruit_mer').click(function() {
          wizard_poisson_fruit_mer();
        });
        $('#wizard_veggie').click(function() {
          wizard_query_negative.push("volaille", "porc", "boeuf", "mouton", "charcuterie", "poisson", "crustacé", "mollusque");
          document.getElementById('positive').value = " " + wizard_query_positive.join(', ') + " ";
          document.getElementById('negative').value = " " + wizard_query_negative.join(', ') + " ";
          wizard_veggie();
        });

        $('#wizard_recommencer').click(function() {
          wizard();
        });
      }

       /*VIANDE*/
       function wizard_viande() {
        $('#wizard').html( '<button id="wizard_viande_blanche">viande blanche</button><br/><button id="wizard_viande_rouge">viande rouge</button><br/><button id="wizard_charcuterie">charcuterie</button><br/><button id="wizard_nimporte_viande_charcut">N\'importe entre les trois</button><br/>' + restartButtonHTML );
        $('#wizard_viande_blanche').click(function() {
          wizard_viande_blanche();
        });
        $('#wizard_viande_rouge').click(function() {
          wizard_viande_rouge();
        });
        $('#wizard_charcuterie').click(function() {
          wizard_charcuterie();
        });
        $('#wizard_nimporte_viande_charcut').click(function() {
          wizard_query_positive.push("volaille", "porc", "boeuf", "mouton", "charcuterie");
          document.getElementById('positive').value = " " + wizard_query_positive.join(', ') + " ";
          document.getElementById('negative').value = " " + wizard_query_negative.join(', ') + " ";
          wizard_legume();
        });

        $('#wizard_recommencer').click(function() {
          wizard();
        });
        
      }

      function wizard_viande_blanche() {
        $('#wizard').html( '<button id="wizard_volaille">volaille</button><br/><button id="wizard_porc">porc</button><br/><button id="wizard_nimporte_viande_blanche">Toute viande blanche</button><br/>' + restartButtonHTML );
        $('#wizard_volaille').click(function() {
          wizard_query_positive.push("volaille");
          document.getElementById('positive').value = " " + wizard_query_positive.join(', ') + " ";
          document.getElementById('negative').value = " " + wizard_query_negative.join(', ') + " ";
          wizard_legume();
        });
        $('#wizard_porc').click(function(){
          wizard_query_positive.push("porc");
          document.getElementById('positive').value = " " + wizard_query_positive.join(', ') + " ";
          document.getElementById('negative').value = " " + wizard_query_negative.join(', ') + " ";
          wizard_legume();
        });
        $('#wizard_nimporte_viande_blanche').click(function() {
          wizard_query_positive.push("volaille", "porc");
          document.getElementById('positive').value = " " + wizard_query_positive.join(', ') + " ";
          document.getElementById('negative').value = " " + wizard_query_negative.join(', ') + " ";
          wizard_legume();
        });

        $('#wizard_recommencer').click(function() {
         wizard();
        });
      }

      function wizard_viande_rouge(){
        $('#wizard').html( '<button id="wizard_boeuf">boeuf</button><br/><button id="wizard_mouton">mouton</button><br/><button id="wizard_nimporte_viande_rouge">Peu importe quelle viande rouge</button><br/>' + restartButtonHTML );
        $('#wizard_boeuf').click(function() {
          wizard_query_positive.push("boeuf");
          document.getElementById('positive').value = " " + wizard_query_positive.join(', ') + " ";
          document.getElementById('negative').value = " " + wizard_query_negative.join(', ') + " ";
          wizard_legume();
        });
        $('#wizard_mouton').click(function() {
          wizard_query_positive.push("mouton");
          document.getElementById('positive').value = " " + wizard_query_positive.join(', ') + " ";
          document.getElementById('negative').value = " " + wizard_query_negative.join(', ') + " ";
          wizard_legume();
        });
        $('#wizard_nimporte_viande_rouge').click(function() {
          wizard_query_positive.push("boeuf", "mouton");
          document.getElementById('positive').value = " " + wizard_query_positive.join(', ') + " ";
          document.getElementById('negative').value = " " + wizard_query_negative.join(', ') + " ";
          wizard_legume();
        });

        $('#wizard_recommencer').click(function() {
          wizard();
        });
      } 

      function wizard_charcuterie(){
        wizard_query_positive.push("charcuterie");
        document.getElementById('positive').value = " " + wizard_query_positive.join(', ') + " ";
        document.getElementById('negative').value = " " + wizard_query_negative.join(', ') + " ";
        wizard_legume();
      }

     /*POISSON - FRUIT DE MER*/
     function wizard_poisson_fruit_mer() {
      $('#wizard').html('<button id="wizard_poisson">poisson</button><br/><button id="wizard_fruit_mer">fruits de mer</button><br/><button id="wizard_nimporte_poisson_fruit_mer">Peu importe entre poisson ou fruit de mer</button><br/>' + restartButtonHTML);
      $('#wizard_poisson').click(function() {
        wizard_query_positive.push("poisson");
        document.getElementById('positive').value = " " + wizard_query_positive.join(', ') + " ";
        document.getElementById('negative').value = " " + wizard_query_negative.join(', ') + " ";
        wizard_legume();
      });

      $('#wizard_fruit_mer').click(function() {
        wizard_fruit_mer();
      });

      $('#wizard_nimporte_poisson_fruit_mer').click(function() {
        wizard_query_positive.push("poisson", "crustacé", "mollusque");
        document.getElementById('positive').value = " " + wizard_query_positive.join(', ') + " ";
        document.getElementById('negative').value = " " + wizard_query_negative.join(', ') + " ";
        wizard_legume();
      });

      $('#wizard_recommencer').click(function() {
        wizard();
      });
     }

     function wizard_fruit_mer() {
      $('#wizard').html('<button id="wizard_crustace">crustacés</button><br/><button id="wizard_mollusque">mollusques</button><br/><button id="wizard_nimporte_fruit_mer">Peu importe quel type de fruit de mer</button><br/>' + restartButtonHTML);
      $('#wizard_crustace').click(function() {
        wizard_query_positive.push("crustacé");
        document.getElementById('positive').value = " " + wizard_query_positive.join(', ') + " ";
        document.getElementById('negative').value = " " + wizard_query_negative.join(', ') + " ";
        wizard_legume();
      });
      $('#wizard_mollusque').click(function() {
        wizard_query_positive.push("mollusque");
        document.getElementById('positive').value = " " + wizard_query_positive.join(', ') + " ";
        document.getElementById('negative').value = " " + wizard_query_negative.join(', ') + " ";
        wizard_legume();
      });
      $('#wizard_nimporte_fruit_mer').click(function() {
        wizard_query_positive.push("crustacé", "mollusque");
        document.getElementById('positive').value = " " + wizard_query_positive.join(', ') + " ";
        document.getElementById('negative').value = " " + wizard_query_negative.join(', ') + " ";
        wizard_legume();
      });

      $('#wizard_recommencer').click(function() {
        wizard();
      });
     }

     /*VEGGIE*/
     function wizard_veggie() {
      wizard_feculent();
     }

     /*LEGUMES*/
     function wizard_legume() {
      $('#wizard').html('<button id="wizard_avec_legume">avec légumes</button><br/><button id="wizard_sans_legume">sans légume</button><br/>' + restartButtonHTML);
      $('#wizard_avec_legume').click(function() {
        wizard_query_positive.push("légumes");
        document.getElementById('positive').value = " " + wizard_query_positive.join(', ') + " ";
        document.getElementById('negative').value = " " + wizard_query_negative.join(', ') + " ";
        wizard_feculent();
      });
      $('#wizard_sans_legume').click(function() {
        wizard_query_negative.push("légumes");
        document.getElementById('positive').value = " " + wizard_query_positive.join(', ') + " ";
        document.getElementById('negative').value = " " + wizard_query_negative.join(', ') + " ";
        wizard_feculent();
      });

      $('#wizard_recommencer').click(function() {
        wizard();
      });
     }

     /*FECULENT*/
     function wizard_feculent() {
      $('#wizard').html('<button id="wizard_pain">pain</button><br/><button id="wizard_cereale">céréales</button><br/><button id="wizard_pate">pâtes</button><br/><button id="wizard_sans_feculent">sans féculent</button><br/><button id="wizard_nimporte_feculent">N\'importe quel féculent</button><br/>' + restartButtonHTML);
     
      $('#wizard_pain').click(function() {
        wizard_query_positive.push("pain");
        document.getElementById('positive').value = " " + wizard_query_positive.join(', ') + " ";
        document.getElementById('negative').value = " " + wizard_query_negative.join(', ') + " ";
		wizard_fin();
      });

      $('#wizard_cereale').click(function() {
        wizard_query_positive.push("céréales");
        document.getElementById('positive').value = " " + wizard_query_positive.join(', ') + " ";
        document.getElementById('negative').value = " " + wizard_query_negative.join(', ') + " ";
		wizard_fin();
      });

      $('#wizard_pate').click(function() {
        wizard_query_positive.push("pâtes");
        document.getElementById('positive').value = " " + wizard_query_positive.join(', ') + " ";
        document.getElementById('negative').value = " " + wizard_query_negative.join(', ') + " ";
		wizard_fin();
      });

      $('#wizard_sans_feculent').click(function() {
        wizard_query_negative.push("féculents");
        document.getElementById('positive').value = " " + wizard_query_positive.join(', ') + " ";
        document.getElementById('negative').value = " " + wizard_query_negative.join(', ') + " ";
		wizard_fin();
      });

      $('#wizard_nimporte_feculent').click(function() {
        wizard_query_positive.push("pain", "céréales", "pâtes");
        document.getElementById('positive').value = " " + wizard_query_positive.join(', ') + " ";
        document.getElementById('negative').value = " " + wizard_query_negative.join(', ') + " ";
		wizard_fin();
      });

      $('#wizard_recommencer').click(function() {
        wizard();
      });
     }
	 
	 function wizard_fin() {
        $('#wizard').html(restartButtonHTML);
        $('#wizard_recommencer').click(function() {
          wizard();
        });
      }

      /*DESSERT*/
      function wizard_dessert() {
        $('#wizard').html('<button id="wizard_gateau">gâteau</button><br/><button id="wizard_glace">glace</button><br/><button id="wizard_macaron">macarons</button><br/><button id="wizard_crepe">crêpes</button><br/>' + restartButtonHTML);
        $('#wizard_gateau').click(function() {
          wizard_query_positive.push("gâteau");
          document.getElementById('positive').value = " " + wizard_query_positive.join(', ') + " ";
          document.getElementById('negative').value = " " + wizard_query_negative.join(', ') + " ";
		  wizard_fin();
        });

        $('#wizard_glace').click(function() {
          wizard_query_positive.push("glace");
          document.getElementById('positive').value = " " + wizard_query_positive.join(', ') + " ";
          document.getElementById('negative').value = " " + wizard_query_negative.join(', ') + " ";
		  wizard_fin();
        });

        $('#wizard_macaron').click(function() {
          wizard_query_positive.push("macaron");
          document.getElementById('positive').value = " " + wizard_query_positive.join(', ') + " ";
          document.getElementById('negative').value = " " + wizard_query_negative.join(', ') + " ";
		  wizard_fin();
        });

        $('#wizard_crepe').click(function() {
          wizard_query_positive.push("crèpe");
          document.getElementById('positive').value = " " + wizard_query_positive.join(', ') + " ";
          document.getElementById('negative').value = " " + wizard_query_negative.join(', ') + " ";
		  wizard_fin();
        });

        $('#wizard_recommencer').click(function() {
          wizard();
        });
      }
	  
	  function wizard_fin() {
        $('#wizard').html(restartButtonHTML);
        $('#wizard_recommencer').click(function() {
          wizard();
        });
      }

      /*END*/ 
      function wizard_end() {
        document.getElementById('positive').value = " " + wizard_query_positive.join(', ') + " ";
		    document.getElementById('negative').value = " " + wizard_query_negative.join(', ') + " ";
	  }

    });
