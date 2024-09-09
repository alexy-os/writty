document.addEventListener("DOMContentLoaded", () => {
  lucide.createIcons();

  const topicInput = document.getElementById('topic-input');
  const tagsContainer = document.getElementById('tags-container');
  const tags = [];
  const contentTab = document.getElementById('content-tab');
  const settingsTab = document.getElementById('settings-tab');

  const promptTypeData = {
    "advisor": {
      "uniqueFields": [
        "problemDescription",
        "contextInformation"
      ]
    },
    "editor": {
      "uniqueFields": [
        "inputText",
        "editingType",
        "grammarRules"
      ]
    },
    "writer": {
      "uniqueFields": [
        "topic",
        "genre",
        "plotElements",
        "characterDescriptions"
      ]
    },
    "researcher": {
      "uniqueFields": [
        "researchQuestion",
        "fieldOfStudy"
      ]
    },
    "translator": {
      "uniqueFields": [
        "sourceLanguage",
        "targetLanguage"
      ]
    },
    "summarizer": {
      "uniqueFields": [
        "textToSummarize",
        "desiredLength"
      ]
    },
    "analyst": {
      "uniqueFields": [
        "dataSet",
        "analysisObjective"
      ]
    },
    "instructor": {
      "uniqueFields": [
        "subjectMatter",
        "learningObjectives"
      ]
    },
    "coder": {
      "uniqueFields": [
        "programmingLanguage",
        "taskDescription"
      ]
    },
    "naming": {
      "uniqueFields": [
        "productDescription",
        "targetAudience"
      ]
    }
  };

  tagsContainer.addEventListener('click', () => {
    topicInput.focus();
  });

  topicInput.addEventListener('keydown', (e) => {
    if (e.key === ',' || e.key === 'Enter') {
      e.preventDefault();
      const tag = topicInput.value.trim();
      if (tag && !tags.includes(tag)) {
        addTag(tag);
        topicInput.value = '';
      }
    }
  });

  function addTag(tag) {
    tags.push(tag);
    const tagElement = document.createElement('span');
    tagElement.classList.add('inline-block', 'bg-sky-100', 'text-sky-600', 'px-2', 'py-1', 'rounded', 'text-xs', 'dark:text-slate-200', 'dark:bg-slate-700', 'mr-1');
    tagElement.innerHTML = `${tag}<span class="ml-2 cursor-pointer">&times;</span>`;
    tagElement.querySelector('span').addEventListener('click', () => removeTag(tagElement, tag));

    const topicInput = document.getElementById('topic-input');
    if (topicInput && topicInput.parentNode === tagsContainer) {
      tagsContainer.insertBefore(tagElement, topicInput);
    } else {
      tagsContainer.appendChild(tagElement);
    }
  }

  function removeTag(tagElement, tag) {
    tagElement.remove();
    const index = tags.indexOf(tag);
    if (index > -1) {
      tags.splice(index, 1);
    }
  }

  const contentType = document.getElementById('content-type');
  const tone = document.getElementById('tone');
  const length = document.getElementById('length');
  const promptInput = document.getElementById('prompt');
  const systemInput = document.getElementById('system');
  const formatSelect = document.getElementById('format');
  const generateBtn = document.getElementById('generate-btn');
  const resultSection = document.getElementById('result');
  const generatedContent = document.getElementById('generated-content');
  const copyBtn = document.getElementById('copy-btn');
  const resetBtn = document.getElementById('reset-btn');
  const importBtn = document.getElementById('import-btn');
  const exportBtn = document.getElementById('export-btn');
  
  const tabRecommendations = document.getElementById('tab-recommendations');
  const recommendationsTab = document.getElementById('recommendations-tab');
  const promptTypes = document.getElementById('promptTypes');
  const promptTypeFields = document.getElementById('promptTypeFields');

  generateBtn.addEventListener('click', generateCopy);
  copyBtn.addEventListener('click', copyToClipboard);
  resetBtn.addEventListener('click', resetForm);

  function generateCopy() {
    const formData = getFormData();
    saveFormData();
    document.querySelector('.p-6').classList.add('hidden');
    resultSection.classList.remove('hidden');
    generatedContent.innerHTML = `<pre>${JSON.stringify(formData, null, 2)}</pre>`;
  }

  function copyToClipboard() {
    const content = generatedContent.textContent;
    navigator.clipboard.writeText(content).then(() => {
      alert('Content copied to clipboard!');
    }).catch(err => {
      console.error('Failed to copy: ', err);
    });
  }

  function resetForm() {
    localStorage.removeItem('formData');
    window.location.reload();
  }

  function getFormData() {
    const formData = {
      keywords: tags,
      contentType: contentType ? contentType.value : '',
      tone: tone ? tone.value : '',
      length: length ? length.value : '',
      prompt: promptInput ? promptInput.value : '',
      system: systemInput ? systemInput.value : '',
      format: formatSelect ? formatSelect.value : '',
      promptTypes: {}
    };

    if (promptTypes.value) {
      formData.promptTypes[promptTypes.value] = {};
      if (promptTypeData[promptTypes.value]) {
        promptTypeData[promptTypes.value].uniqueFields.forEach(field => {
          const fieldElement = document.getElementById(field);
          if (fieldElement) {
            formData.promptTypes[promptTypes.value][field] = fieldElement.value;
          }
        });
      }
    }

    return formData;
  }

  function saveFormData() {
    const formData = getFormData();
    try {
      localStorage.setItem('formData', JSON.stringify(formData));
    } catch (error) {
      console.error('Error saving form data:', error);
    }
  }

  function loadFormData(data) {
    const savedData = data || localStorage.getItem('formData');
    if (savedData) {
      try {
        const data = typeof savedData === 'string' ? JSON.parse(savedData) : savedData;
        contentType.value = data.contentType || '';
        tone.value = data.tone || '';
        length.value = data.length || '';
        promptInput.value = data.prompt || '';
        systemInput.value = data.system || '';
        formatSelect.value = data.format || '';
        
        tagsContainer.innerHTML = '';
        const topicInput = document.createElement('input');
        topicInput.type = 'text';
        topicInput.id = 'topic-input';
        topicInput.classList.add('flex-grow', 'outline-none', 'bg-transparent');
        topicInput.placeholder = 'Enter your topic or keywords';
        tagsContainer.appendChild(topicInput);
        
        tags.length = 0;
        if (Array.isArray(data.keywords)) {
          data.keywords.forEach(keyword => addTag(keyword));
        }
        
        topicInput.addEventListener('keydown', (e) => {
          if (e.key === ',' || e.key === 'Enter') {
            e.preventDefault();
            const tag = topicInput.value.trim();
            if (tag && !tags.includes(tag)) {
              addTag(tag);
              topicInput.value = '';
            }
          }
        });

        if (data.recommendedFields) {
          document.getElementById('mainTask').value = data.recommendedFields.mainTask || '';
          document.getElementById('audience').value = data.recommendedFields.audience || '';
          document.getElementById('goal').value = data.recommendedFields.goal || '';
          document.getElementById('confidentialityLevel').value = data.recommendedFields.confidentialityLevel || '';
          document.getElementById('iterationGuidelines').value = data.recommendedFields.iterationGuidelines || '';
        }

        if (data.promptTypes) {
          const promptType = Object.keys(data.promptTypes)[0];
          if (promptType) {
            promptTypes.value = promptType;
            createDynamicFields(promptType);
            const fields = data.promptTypes[promptType];
            for (const [key, value] of Object.entries(fields)) {
              const field = document.getElementById(key);
              if (field) field.value = value;
            }
          }
        }
      } catch (error) {
        console.error('Error parsing saved form data:', error);
      }
    }
  }

  function createDynamicFields(type) {
    promptTypeFields.innerHTML = '';
    if (promptTypeData[type]) {
      promptTypeData[type].uniqueFields.forEach(field => {
        const div = document.createElement('div');
        div.innerHTML = `
          <label for="${field}" class="block mb-2 text-sm font-medium">${field.charAt(0).toUpperCase() + field.slice(1)}</label>
          <input type="text" id="${field}" class="w-full p-2 border rounded-lg text-sm bg-white dark:bg-slate-800 dark:text-white dark:border-slate-700">
        `;
        promptTypeFields.appendChild(div);
      });
    }
    promptTypeFields.classList.remove('hidden');
  }

  promptTypes.addEventListener('change', (e) => {
    const selectedType = e.target.value;
    createDynamicFields(selectedType);
  });

  loadFormData();

  document.querySelectorAll('input, select, textarea').forEach(element => {
    if (element) {
      element.addEventListener('change', saveFormData);
    }
  });

  const darkModeToggle = document.getElementById("dark-mode-toggle");
  if (darkModeToggle) {
    darkModeToggle.addEventListener("click", () => {
      document.documentElement.classList.toggle("dark");
      localStorage.setItem("darkMode", document.documentElement.classList.contains("dark"));
      updateDarkModeIcon();
    });

    const isDarkMode = localStorage.getItem("darkMode") === "true";
    document.documentElement.classList.toggle("dark", isDarkMode);
    updateDarkModeIcon();
  }

  function updateDarkModeIcon() {
    const darkModeToggle = document.getElementById("dark-mode-toggle");
    if (darkModeToggle) {
      const icon = darkModeToggle.querySelector('i');
      if (icon) {
        if (document.documentElement.classList.contains("dark")) {
          icon.setAttribute('data-lucide', 'moon');
        } else {
          icon.setAttribute('data-lucide', 'sun');
        }
        lucide.createIcons();
      }
    }
  }

  importBtn.addEventListener('click', importProject);
  exportBtn.addEventListener('click', exportProject);

  function importProject() {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.json';
    input.onchange = (event) => {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const data = JSON.parse(e.target.result);
          loadFormData(data);
          alert('Project imported successfully!');
        } catch (error) {
          console.error('Error parsing imported data:', error);
          alert('Error importing project. Please check the file format.');
        }
      };
      reader.readAsText(file);
    };
    input.click();
  }

  function exportProject() {
    const formData = getFormData();
    const dataStr = JSON.stringify(formData, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,' + encodeURIComponent(dataStr);
    const exportFileDefaultName = 'writty_ai_project.json';

    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
  }

  const tabContent = document.getElementById('tab-content');
  
  function switchTab(activeTab, inactiveTabs, activeContent, inactiveContents) {
    activeTab.classList.add('text-sky-600', 'border-b-2', 'border-sky-600');
    inactiveTabs.forEach(tab => tab.classList.remove('text-sky-600', 'border-b-2', 'border-sky-600'));
    activeContent.classList.remove('hidden');
    inactiveContents.forEach(content => content.classList.add('hidden'));
  }

  tabRecommendations.addEventListener('click', () => switchTab(tabRecommendations, [tabContent, settingsTab], recommendationsTab, [contentTab, settingsTab]));
  tabContent.addEventListener('click', () => switchTab(tabContent, [tabRecommendations, settingsTab], contentTab, [recommendationsTab, settingsTab]));
  const tabSettings = document.getElementById('tab-settings');
  tabSettings.addEventListener('click', () => switchTab(tabSettings, [tabRecommendations, tabContent], settingsTab, [recommendationsTab, contentTab]));
});
