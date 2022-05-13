<template>
  <div>
    <v-dialog :value="mainFormActive" persistent width="80vw" height="80vh">
      <v-card>
        <v-card-title>
          Edition du CV {{ cv.jobTitle }}
        </v-card-title>
        <v-card-text>
          <v-tabs>
            <v-tabs-slider></v-tabs-slider>
            <v-tab>Général</v-tab>
            <v-tab>Éducation</v-tab>
            <v-tab>Compétences</v-tab>
            <v-tab>Expériences professionnelles</v-tab>
            <v-tab>Centres d'intérêt</v-tab>
            <v-tab>Langues maîtrisées</v-tab>
            <v-tab>Certifications</v-tab>


            <v-tab-item>
              <v-form ref="mainForm" v-model="mainFormValid" lazy-validation @submit.prevent="saveState">
                <!-- /education /skills /previousJobs /hobbies /languages /extracurricularCertifications-->
                <v-container>
                  <v-row>
                    <v-col>
                      <v-text-field v-model="cv.jobTitle" :rules="mainFormRules" label="Intitulé du poste recherché"
                        required @input="mainFormDirty = true" />
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col>
                      <v-text-field v-model="cv.fullName" :rules="fullNameRules" label="Nom et Prénom(s)"
                        required @input="mainFormDirty = true" />
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col>
                      <v-text-field v-model="cv.phoneNumber" :rules="mainFormRules" label="Numéro de téléphone" required
                        @input="mainFormDirty = true" />
                    </v-col>
                    <v-col>
                      <v-text-field v-model="cv.emailAdress" :rules="emailRules" label="Adresse mail" required
                        @input="mainFormDirty = true" />
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col>
                      <v-text-field v-model="cv.homeAdress" :rules="mainFormRules" label="Adresse postale" required
                        @input="mainFormDirty = true" />
                    </v-col>
                    <v-col>
                      <v-text-field v-model="cv.drivingLicence" :rules="mainFormRules" label="Permis de conduire"
                        required @input="mainFormDirty = true" />
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col>
                      <v-btn :ripple="false" :outlined="!mainFormDirty" color="green" @click="saveStateAndLeave">
                        Sauvegarder et quitter
                      </v-btn>
                      <v-btn type="submit" :ripple="false" :plain="!mainFormDirty" :outlined="!mainFormDirty"
                        color="blue">
                        Sauvegarder
                      </v-btn>
                      <v-btn :ripple="false" :plain="mainFormDirty" color="red" @click="leavePage">
                        Quitter
                      </v-btn>
                    </v-col>
                  </v-row>
                </v-container>
              </v-form>
            </v-tab-item>


            <!-- education-->
            <v-tab-item>
              <v-form ref="educationForm" v-model="educationFormValid" lazy-validation @submit.prevent="saveState">
                <!-- /education /skills /previousJobs /hobbies /languages /extracurricularCertifications-->
                <v-container>
                  <v-row>
                    <v-col>
                      <v-text-field v-model="cv.education.location" :rules="educationRules" label="Lieu d'études"
                        required @input="educationFormDirty = true" />
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col>
                      <v-text-field v-model="cv.education.title" :rules="educationRules" label="Nom du diplôme ou de la formation" required
                        @input="educationFormDirty = true" />
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col>
                      <v-text-field v-model="cv.education.startYear" :rules="educationRules" label="Année de début" required type="number"
                        @input="educationFormDirty = true" />
                    </v-col>
                    <v-col>
                      <v-text-field v-model="cv.education.endYear" :rules="educationRules" label="Année de fin" required type="number"
                        @input="educationFormDirty = true" />
                    </v-col>
                    <v-col>
                      <v-switch  v-model="cv.education.hasEnded" label="En cours" :rules="educationRules" required
                      @input="educationFormDirty = true"></v-switch>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col>
                      <v-text-field v-model="cv.education.comments" :rules="educationRules" label="Commentaires"
                        required @input="educationFormDirty = true" />
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col>
                       <v-btn :ripple="false" :outlined="!educationFormDirty" color="green" @click="saveStateAndLeave">
                        Sauvegarder et quitter
                      </v-btn>
                      <v-btn type="submit" :ripple="false" :plain="!educationFormDirty" :outlined="!educationFormDirty"
                        color="blue">
                        Sauvegarder
                      </v-btn>
                      <v-btn :ripple="false" :plain="educationFormDirty" color="red" @click="leavePage">
                        Quitter
                      </v-btn>
                    </v-col>
                  </v-row>
                </v-container>
              </v-form>
            </v-tab-item>



            <!-- skills-->
            <v-tab-item>
              <v-form ref="skillForm" v-model="skillFormValid" lazy-validation @submit.prevent="saveState">
                <v-container>
                  <v-row>
                    <v-col>
                      <v-text-field v-model="cv.skills.skillTitle" :rules="skillRules" label="Type de compétence"
                        required @input="skillFormDirty = true" />
                    </v-col>
                    <v-col>
                      <v-text-field v-model="cv.skills.skillValue" :rules="skillRules" label="Exemple"
                        required @input="skillFormDirty = true" />
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col>
                       <v-btn :ripple="false" :outlined="!skillFormDirty" color="green" @click="saveStateAndLeave">
                        Sauvegarder et quitter
                      </v-btn>
                      <v-btn type="submit" :ripple="false" :plain="!skillFormDirty" :outlined="!skillFormDirty"
                        color="blue">
                        Sauvegarder
                      </v-btn>
                      <v-btn :ripple="false" :plain="skillFormDirty" color="red" @click="leavePage">
                        Quitter
                      </v-btn>
                    </v-col>
                  </v-row>
                </v-container>
              </v-form>
            </v-tab-item>


            <!-- jobs-->
            <v-tab-item>
              <v-form ref="jobForm" v-model="jobFormValid" lazy-validation @submit.prevent="saveState">
                <v-container>
                  <v-row>
                    <v-col>
                      <v-text-field v-model="cv.previousJobs.jobTitle" :rules="jobRules" label="Intitulé du poste"
                        required @input="jobFormDirty = true" />
                    </v-col>
                    <v-col>
                      <v-text-field v-model="cv.previousJobs.companyName" :rules="jobRules" label="Entreprise"
                        required @input="jobFormDirty = true" />
                    </v-col>
                  </v-row>

                  <v-row>
                    <v-col>
                      <v-text-field v-model="cv.previousJobs.jobDescription" :rules="jobRules" label="Longue description"
                        required @input="jobFormDirty = true" />
                    </v-col>
                    <v-col>
                      <v-text-field v-model="cv.previousJobs.jobShortDescription" :rules="jobRules" label="Courte description"
                        required @input="jobFormDirty = true" />
                    </v-col>
                  </v-row>

                  <v-row>
                    <v-col>
                      <v-text-field v-model="cv.previousJobs.jobTechnicalKeywords" :rules="jobRules" label="Environnement technique"
                        required @input="jobFormDirty = true" />
                    </v-col>
                    <v-col>
                      <v-text-field v-model="cv.previousJobs.missions" :rules="jobRules" label="Missions"
                        required @input="jobFormDirty = true" />
                    </v-col>
                  </v-row>

                  <v-row>
                    <v-col>
                      <v-text-field v-model="cv.education.startYear" :rules="educationRules" label="Année de début" required type="number"
                        @input="jobFormDirty = true" />
                    </v-col>
                    <v-col>
                      <v-text-field v-model="cv.education.endYear" :rules="educationRules" label="Année de fin" required type="number"
                        @input="jobFormDirty = true" />
                    </v-col>
                    <v-col>
                      <v-switch  v-model="cv.education.hasEnded" label="En cours" :rules="educationRules" required
                      @input="jobFormDirty = true"></v-switch>
                    </v-col>
                    </v-row>
                  <v-row>
                    <v-col>
                      <v-btn :ripple="false" :outlined="!jobFormDirty" color="green" @click="saveStateAndLeave">
                        Sauvegarder et quitter
                      </v-btn>
                      <v-btn type="submit" :ripple="false" :plain="!jobFormDirty" :outlined="!jobFormDirty"
                        color="blue">
                        Sauvegarder
                      </v-btn>
                      <v-btn :ripple="false" :plain="jobFormDirty" color="red" @click="leavePage">
                        Quitter
                      </v-btn>
                    </v-col>
                  </v-row>
                </v-container>
              </v-form>
            </v-tab-item>


            <!--hobbies-->
            <v-tab-item>
              <v-form ref="hobbiesForm" v-model="hobbiesFormValid" lazy-validation @submit.prevent="saveState">
                <!-- /education /skills /previousJobs /hobbies /languages /extracurricularCertifications-->
                <v-container>
                  <v-row v-for="hobby in Hobbies" :key="hobby.id">
                    <v-col>
                      <v-text-field v-model="hobby.hobbies" :rules="hobbiesRules" label="Centres d'intérêt"
                        required @input="hobbiesFormDirty = true" />
                      <v-btn :ripple="false" :outlined="!hobbiesFormDirty" color="green" @click="saveStateAndLeave">
                        Sauvegarder et quitter
                      </v-btn>
                      <v-btn type="submit" :ripple="false" :plain="!hobbiesFormDirty" :outlined="!hobbiesFormDirty"
                        color="blue">
                        Sauvegarder
                      </v-btn>
                      <v-btn :ripple="false" :plain="hobbiesFormDirty" color="red" @click="leavePage">
                        Quitter
                      </v-btn>
                    </v-col>
                  </v-row>
                </v-container>
              </v-form>
            </v-tab-item>


            <!--languages-->
            <v-tab-item>
              <v-form ref="languageForm" v-model="languageFormValid" lazy-validation @submit.prevent="saveState">
                <!-- /education /skills /previousJobs /hobbies /languages /extracurricularCertifications-->
                <v-container>
                  <v-row v-for="language in Languages" :key="language.id">
                    <v-col>
                      <v-text-field v-model="language.languageName" :rules="langRules" label="Langue"
                        required @input="languageFormDirty = true" />
                    </v-col>
                    <v-col>
                      <v-text-field v-model="language.level" :rules="langRules" label="Niveau" required
                        @input="languageFormDirty = true" />
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col>
                      <v-btn :ripple="false" :outlined="!languageFormDirty" color="green" @click="saveStateAndLeave">
                        Sauvegarder et quitter
                      </v-btn>
                      <v-btn type="submit" :ripple="false" :plain="!languageFormDirty" :outlined="!languageFormDirty"
                        color="blue">
                        Sauvegarder
                      </v-btn>
                      <v-btn :ripple="false" :plain="languageFormDirty" color="red" @click="leavePage">
                        Quitter
                      </v-btn>
                    </v-col>
                  </v-row>
                </v-container>
              </v-form>
            </v-tab-item>



            <!--certification-->
            <v-tab-item>
              <v-form ref="CertificationForm" v-model="CertificationFormValid" lazy-validation @submit.prevent="saveState">
                <!-- /education /skills /previousJobs /hobbies /languages /extracurricularCertifications-->
                <v-container>
                  <v-row v-for="certification in extracurricularCertifications" :key="certification.id">
                    <v-col>
                      <v-text-field v-model="certification.authority" :rules="certifRules" label="Autorité de certification"
                        required @input="CertificationFormDirty = true" />
                    </v-col>
                    <v-col>
                      <v-text-field v-model="certification.certificationName" :rules="certifRules" label="Nom de la certification" required
                        @input="CertificationFormDirty = true" />
                    </v-col>
                    <v-col>
                      <v-text-field v-model="certification.certificationPassYear" :rules="certifRules" label="Année d'obtention" required type="number"
                        @input="CertificationFormDirty = true" />
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col>
                      <v-btn :ripple="false" :outlined="!CertificationFormDirty" color="green" @click="saveStateAndLeave">
                        Sauvegarder et quitter
                      </v-btn>
                      <v-btn type="submit" :ripple="false" :plain="!CertificationFormDirty" :outlined="!CertificationFormDirty"
                        color="blue">
                        Sauvegarder
                      </v-btn>
                      <v-btn :ripple="false" :plain="CertificationFormDirty" color="red" @click="leavePage">
                        Quitter
                      </v-btn>
                    </v-col>
                  </v-row>
                </v-container>
              </v-form>
            </v-tab-item>
          </v-tabs>
        </v-card-text>
      </v-card>
    </v-dialog>


    
    <!--<v-dialog :value="false" persistent width="40vw" height="80vh">
      <v-card>
        <v-card-text>
          <v-form ref="form" v-model="valid" lazy-validation>
            <v-text-field v-model="user" :counter="10" :rules="nameRules" label="User" required></v-text-field>
            <v-form v-model="form" :items="educations" :rules="educationRules" label="Education" required></v-form>
            <v-btn color="green" @click="education">
              Education
            </v-btn>
            <v-btn color="blue" @click="experience">
              Experience
            </v-btn>
            <p class="font-weight-regular">
              {{ school }} {{ starttime }}-{{ endtime }}
            </p>
            <v-select v-model="skill" :items="skills" :rules="skillRules" label="Skill" required></v-select>
            <v-text-field v-model="hobbies" :counter="50" :rules="hobbyRules" label="Hobby" required></v-text-field>

            <v-checkbox v-model="checkbox" :rules="[v => !!v || 'You must agree to continue!']" label="Do you agree?"
              required></v-checkbox>

            <v-btn :disabled="!valid" color="success" class="mr-4" @click="validate">
              Validate
            </v-btn>

            <v-btn color="error" class="mr-4" @click="reset">
              Reset Form
            </v-btn>

          </v-form>
        </v-card-text>
      </v-card>
      <v-form ref="form" v-model="valid" lazy-validation v-if="false">
        <v-text-field v-model="school" :counter="150" :rules="schoolRules" label="School" required></v-text-field>
        <v-row>
          <v-col cols="11" sm="5">
            <v-menu ref="menu" v-model="menu" :close-on-content-click="false" :return-value.sync="date"
              transition="scale-transition" offset-y max-width="290px" min-width="auto">
              <template v-slot:activator="{ on, attrs }">
                <v-text-field v-model="data" label="Start Time" prepend-icon="mdi-calendar" readonly v-bind="attrs"
                  v-on="on"></v-text-field>
              </template>
              <v-date-picker v-model="date" type="month" no-title scrollable>
                <v-spacer></v-spacer>
                <v-btn text color="primary" @click="menu = false">
                  Cancel
                </v-btn>
                <v-btn text color="primary" @click="$refs.menu.save(date)">
                  OK
                </v-btn>
              </v-date-picker>
            </v-menu>
          </v-col>
          <v-spacer></v-spacer>
          <v-col cols="11" sm="5">
            <v-dialog ref="dialog" v-model="modal" :return-value.sync="date" persistent width="290px">
              <template v-slot:activator="{ on, attrs }">
                <v-text-field v-model="date" label="End Time" prepend-icon="mdi-calendar" readonly v-bind="attrs"
                  v-on="on"></v-text-field>
              </template>
              <v-date-picker v-model="date" type="month" scrollable>
                <v-spacer></v-spacer>
                <v-btn text color="primary" @click="modal = false">
                  Cancel
                </v-btn>
                <v-btn text color="primary" @click="$refs.dialog.save(date)">
                  OK
                </v-btn>
              </v-date-picker>
            </v-dialog>
          </v-col>
        </v-row>
        <v-select :items="items" label="Type" dense outlined></v-select>
        <v-btn :disabled="!valid" color="success" class="mr-4" @click="validate">
          Validate
        </v-btn>

        <v-btn color="error" class="mr-4" @click="reset">
          Reset Form
        </v-btn>
      </v-form>
      <v-form ref="form" v-model="valid" lazy-validation v-if="false">
        <v-text-field v-model="Company" :counter="150" :rules="schoolRules" label="Company" required></v-text-field>
        <v-row>
          <v-col cols="11" sm="5">
            <v-menu ref="menu" v-model="menu" :close-on-content-click="false" :return-value.sync="date"
              transition="scale-transition" offset-y max-width="290px" min-width="auto">
              <template v-slot:activator="{ on, attrs }">
                <v-text-field v-model="date" label="Start Time" prepend-icon="mdi-calendar" readonly v-bind="attrs"
                  v-on="on"></v-text-field>
              </template>
              <v-date-picker v-model="date" type="month" no-title scrollable>
                <v-spacer></v-spacer>
                <v-btn text color="primary" @click="menu = false">
                  Cancel
                </v-btn>
                <v-btn text color="primary" @click="$refs.menu.save(date)">
                  OK
                </v-btn>
              </v-date-picker>
            </v-menu>
          </v-col>
          <v-spacer></v-spacer>
          <v-col cols="11" sm="5">
            <v-dialog ref="dialog" v-model="modal" :return-value.sync="date" persistent width="290px">
              <template v-slot:activator="{ on, attrs }">
                <v-text-field v-model="date" label="End Time" prepend-icon="mdi-calendar" readonly v-bind="attrs"
                  v-on="on"></v-text-field>
              </template>
              <v-date-picker v-model="date" type="month" scrollable>
                <v-spacer></v-spacer>
                <v-btn text color="primary" @click="modal = false">
                  Cancel
                </v-btn>
                <v-btn text color="primary" @click="$refs.dialog.save(date)">
                  OK
                </v-btn>
              </v-date-picker>
            </v-dialog>
          </v-col>
        </v-row>
        <v-text-field v-model="positiontitle" :counter="50" :rules="nameRules" label="Position Title"></v-text-field>
        <v-btn :disabled="!valid" color="success" class="mr-4" @click="validate">
          Validate
        </v-btn>

        <v-btn color="error" class="mr-4" @click="reset">
          Reset Form
        </v-btn>
      </v-form>
    </v-dialog>-->
  </div>
</template>


<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  middleware: 'auth',
  data() {
    return {
      mainFormActive: true,
      mainFormValid: false,
      mainFormDirty: false,
      cv: {
        jobTitle: '',
        phoneNumber: '',
        emailAdress: '',
        homeAdress: '',
        drivingLicence: '',
        education: [],
        skills: [],
        previousJobs: [],
        hobbies: [],
        languages: [],
        extracurricularCertifications: [],
        id: ''
      },
      mainFormRules: [
        (v: any) => !!v || 'Champ requis',
      ],
      educationRules: [
        (v: any) => !!v || 'Champ requis',
      ],
      skillRules: [
        (v: any) => !!v || 'Champ requis',
      ],
      jobRules: [
        (v: any) => !!v || 'Champ requis',
      ],

      extracurricularCertifications: [{
        authority:'',
        certificationName: '',
        certificationPassYear: '',
        id:''
      }],

      Languages: [{
        languageName:'',
        level: '',
        id:''
      }],

      Hobbies: [{
        hobbies: '',
        id: ''
      }],
      emailRules: [
        (v: any) => !!v || 'Champ requis',
        (v: any) => /.+@.+\..+/.test(v) || 'Adresse mail invalide',
      ],
      certifRules: [
        (v: any) => !!v || 'Champ requis'
      ],
      yearRule: [
        (v: any) => typeof v==="number" || "Année invalide",
      ], 
      langRules: [
        (v: any) => !!v || 'Champ requis'
      ],
      // Old data
      date: new Date().toISOString().substr(0, 7),
      menu: false,
      modal: false,
      valid: true,
      name: '',
      items: ["High School", "Ba", "Ma", "Do"],
      email: '',
      school: '',
      schoolRules: [
        (v: any) => !!v || 'Name of school is required',
        (v: any) => (v && v.length <= 150) || 'Name of school must be less than 150 characters',
      ],
      user: ''
    }
  },

  methods: {
    validate() {
      (this.$refs.form as any).validate()
    },
    reset() {
      (this.$refs.form as any).reset()
    },
    education() {
      (this.$refs.form as any).resetValidation()
    },
    async saveStateAndLeave() {
      await this.saveState()
      this.leavePage()
    },
    async saveState() {
      this.mainFormDirty = false
    },
    leavePage() {
      this.mainFormActive = false
      this.$router.back()
    }
  },
})
</script>