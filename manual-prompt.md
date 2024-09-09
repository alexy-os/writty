JSON-prompt template:

```json
{
  "commonFields": {
    "role": ,
    "mainTask": ,
    "processSteps": [],
    "expertise": [],
    "responseRequirements": [],
    "outputFormat": ,
    "creativityLevel": ,
    "keywords": [],
    "type": ,
    "tone": ,
    "wordCount": ,
    "style": ,
    "audience": ,
    "goal": 
  },
  "recommendedFields": {
    "ethicalConsiderations": [],
    "confidentialityLevel": ,
    "iterationGuidelines": ,
    "fallbackOptions": [],
    "crossDomainRelevance": [],
    "expectedOutputQuality": ,
    "timeConstraints": ,
    "sourceCitation": ,
    "adaptabilityLevel": 
  },
  "promptTypes": {
    "advisor": {
      "uniqueFields": [
        "problemDescription",
        "contextInformation",
        "desiredOutcome",
        "constraintsAndLimitations",
        "previousAttempts",
        "relevantExperience",
        "timeframe",
        "riskTolerance",
        "budgetConsiderations",
        "stakeholders"
      ]
    },
    "editor": {
      "uniqueFields": [
        "inputText",
        "editingType",
        "grammarRules",
        "styleguide",
        "targetReadability",
        "preserveOriginalMeaning",
        "focusAreas",
        "formatting",
        "citations",
        "languageVariant"
      ]
    },
    "writer": {
      "uniqueFields": [
        "topic",
        "genre",
        "plotElements",
        "characterDescriptions",
        "setting",
        "narrativeStyle",
        "themeAndMotifs",
        "conflictType",
        "desiredLength",
        "targetEmotion"
      ]
    },
    "researcher": {
      "uniqueFields": [
        "researchQuestion",
        "fieldOfStudy",
        "methodologyPreference",
        "dataSourcesRequired",
        "timePeriod",
        "geographicalFocus",
        "requiredDepth",
        "interdisciplinaryAspects",
        "ethicalConsiderations",
        "expectedDeliverables"
      ]
    },
    "translator": {
      "uniqueFields": [
        "sourceLanguage",
        "targetLanguage",
        "textToTranslate",
        "preserveFormatting",
        "culturalAdaptation",
        "technicalTerminology",
        "tonePreservation",
        "idiomHandling",
        "targetDialect",
        "purposeOfTranslation"
      ]
    },
    "summarizer": {
      "uniqueFields": [
        "textToSummarize",
        "desiredLength",
        "focusAreas",
        "excludedTopics",
        "summaryStyle",
        "targetAudience",
        "keyPointsToInclude",
        "contextPreservation",
        "technicalityLevel",
        "visualElementInclusion"
      ]
    },
    "analyst": {
      "uniqueFields": [
        "dataSet",
        "analysisObjective",
        "requiredMetrics",
        "comparisonPoints",
        "trendIdentification",
        "outlierDetection",
        "confidenceLevel",
        "visualizationPreferences",
        "hypothesisToTest",
        "predictiveModeling"
      ]
    },
    "instructor": {
      "uniqueFields": [
        "subjectMatter",
        "learningObjectives",
        "targetAgeGroup",
        "prerequisiteKnowledge",
        "teachingMethodology",
        "assessmentCriteria",
        "lessonDuration",
        "interactivityLevel",
        "resourcesAvailable",
        "accommodations"
      ]
    },
    "coder": {
      "uniqueFields": [
        "programmingLanguage",
        "taskDescription",
        "inputOutputExamples",
        "performanceRequirements",
        "codeStyle",
        "errorHandling",
        "compatibilityRequirements",
        "securityConsiderations",
        "librariesAndFrameworks",
        "documentationLevel"
      ]
    },
    "naming": {
      "uniqueFields": [
        "productDescription",
        "targetAudience",
        "industryContext",
        "brandIdentity",
        "languagePreferences",
        "characterLimit",
        "culturalConsiderations",
        "competitors",
        "futureScalability",
        "trademark"
      ]
    }
  }
}
```

## Explanation and Recommendations:

### JSON Structure:

**commonFields:** Contains mandatory and common fields for all types of prompts.
**recommendedFields:** Includes optional fields that can improve the quality of the prompt.
**promptTypes:** Contains different types of prompts with their unique fields.

### Using a template:

When creating a prompt, select the appropriate type from promptTypes.
Fill in all fields from commonFields.
Add the appropriate fields from recommendedFields as needed.
Fill in the unique fields for the selected prompt type.

### Recommendations for completion:

Be specific and clear in descriptions.
Use numeric values for fields where applicable (e.g. creativityLevel, wordCount).
For array fields (e.g., keywords, processSteps), provide lists of elements.
Adapt field values to the specific task and context.

### Flexibility of use:

The template is designed for maximum flexibility. You can combine fields from different types of prompts if the task requires an interdisciplinary approach.
Not all fields are required. Focus on those that are most relevant to your specific task.

### Flexibility of use:

The template is designed for maximum flexibility. You can combine fields from different types of prompts if the task requires an interdisciplinary approach.
Not all fields are required. Focus on those that are most relevant to your specific task.

### Iterative approach:

Use this template as a starting point. As you use it and get results, you can tweak and optimize the prompt structure.
Experiment with different combinations of fields to achieve the best results.

This JSON template provides a comprehensive framework for creating diverse and effective prompts for a variety of tasks, from text writing to data analysis to programming. It enables you to create accurate and efficient prompts for AI writer and texting applications.
