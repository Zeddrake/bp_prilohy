<script>
	// Importy funkcí z balíčku Svelte a komponenty Task
	import { onMount } from 'svelte';
	import { writable } from 'svelte/store';
	import Task from './Task.svelte';
  
	// Vytvoření reaktivní proměnné pro seznam úkolů a inicializace prázdným polem
	let tasks = writable([]);
	// Proměnná pro ukládání názvu nového úkolu z formuláře
	let newTaskTitle = '';
  // Funkce pro přidání nového úkolu do seznamu úkolů
	function addTask() {
		// Kontrola, zda je název nového úkolu neprázdný
	  if (newTaskTitle.trim()) {
		// Aktualizace seznamu úkolů - přidání nového úkolu
		tasks.update(arr => [...arr, { title: newTaskTitle, completed: false }]);
		// Vyprázdnění pole pro nový název úkolu
		newTaskTitle = '';
	  }
	}
  // Funkce pro odstranění úkolu ze seznamu na základě indexu
	function deleteTask(index) {
		// Aktualizace seznamu úkolů - odstranění úkolu s odpovídajícím indexem
	  tasks.update(arr => arr.filter((_, i) => i !== index));
	}
  // Funkce pro označení úkolu jako dokončeného nebo nedokončeného na základě indexu
	function completeTask(index) {
		// Aktualizace stavu úkolu - změna hodnoty 
	  tasks.update(arr => {
		arr[index].completed = !arr[index].completed;
		return arr;
	  });
	}
  </script>
  
  <style>
	/* Styly pro hlavní kontejner aplikace */
	.app-container {
	  max-width: 600px;
	  margin: 0 auto;
	  padding: 20px;
	  border: 1px solid #ddd;
	  border-radius: 10px;
	  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
	}
	/* Styly pro nadpis */
	h1 {
	  text-align: center;
	  margin-bottom: 20px;
	  font-size: 24px;
	  color: #333;
	}
  /* Styly pro vstupní pole */
	input[type="text"] {
	  width: calc(100% - 80px);
	  padding: 10px;
	  font-size: 16px;
	  border: 1px solid #ddd;
	  border-radius: 5px;
	  margin-bottom: 10px;
	}
  /* Styly pro tlačítka */
	button {
	  padding: 10px 20px;
	  font-size: 16px;
	  background-color: #007bff;
	  color: #fff;
	  border: none;
	  border-radius: 5px;
	  cursor: pointer;
	}
  
	button:hover {
	  background-color: #0056b3;
	}
  </style>
  
  <div class="app-container">
	<!-- Hlavní nadpis aplikace -->
	<h1>Seznam úkolů</h1>
	<!-- Formulář pro přidání nového úkolu -->
	<div style="display: flex; margin-bottom: 20px;">
	  <input type="text" bind:value={newTaskTitle} placeholder="Přidat nový úkol">
	  <button on:click={addTask}>Přidat úkol</button>
	</div>
  <!-- Seznam úkolů s použitím komponenty Task -->
	{#each $tasks as task, index}
	  <Task {task} onDelete={() => deleteTask(index)} onComplete={() => completeTask(index)} />
	{/each}
  </div>
  