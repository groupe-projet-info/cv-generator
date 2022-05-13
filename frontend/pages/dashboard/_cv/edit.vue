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
              <v-form ref="mainForm" v-model="mainFormValid" lazy-validation @submit.prevent="saveMainState">
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
                      <v-text-field v-model="cv.fullName" :rules="fullNameRules" label="Nom et Prénom(s)" required
                        @input="mainFormDirty = true" />
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
                      <v-btn :ripple="false" :outlined="!mainFormDirty" color="green" @click="saveMainStateAndLeave">
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
              <v-form ref="educationForm" v-model="educationFormValid" lazy-validation @submit.prevent="saveEducationState">
                <!-- /education /skills /previousJobs /hobbies /languages /extracurricularCertifications-->
                <v-container v-for="edu in education" :key="edu.id">
                  <v-row >
                    <v-col>
                      <v-text-field v-model="edu.location" :rules="educationRules" label="Lieu d'études"
                        required @input="educationFormDirty = true" />
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col>
                      <v-text-field v-model="edu.title" :rules="educationRules" label="Nom du diplôme ou de la formation" required
                        @input="educationFormDirty = true" />
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col>
                      <v-text-field v-model="edu.startYear" :rules="educationRules" label="Année de début" required type="number"
                        @input="educationFormDirty = true" />
                    </v-col>
                    <v-col>
                      <v-text-field v-model="edu.endYear" :rules="educationRules" label="Année de fin" required type="number"
                        @input="educationFormDirty = true" />
                    </v-col>
                    <v-col>
                      <v-switch  v-model="edu.hasEnded" label="En cours" :rules="educationRules" required
                      @input="educationFormDirty = true"></v-switch>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col>
                      <v-text-field v-model="edu.comments" :rules="educationRules" label="Commentaires"
                        required @input="educationFormDirty = true" />
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col>
                       <v-btn :ripple="false" :outlined="!educationFormDirty" color="green" @click="saveEducationStateAndLeave">
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
              <v-form ref="skillForm" v-model="skillFormValid" lazy-validation @submit.prevent="saveSkillState">
                <v-container v-for="skill in skills" :key="skill.id">
                  <v-row>
                    <v-col>
                      <v-text-field v-model="skill.skillTitle" :rules="skillRules" label="Type de compétence"
                        required @input="skillFormDirty = true" />
                    </v-col>
                    <v-col>
                      <v-text-field v-model="skill.skillValue" :rules="skillRules" label="Exemple"
                        required @input="skillFormDirty = true" />
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col>
                       <v-btn :ripple="false" :outlined="!skillFormDirty" color="green" @click="saveSkillStateAndLeave">
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
              <v-form ref="jobForm" v-model="jobFormValid" lazy-validation @submit.prevent="saveJobState">
                <v-container v-for="job in previousJobs" :key="job.id">
                  <v-row>
                    <v-col>
                      <v-text-field v-model="job.jobTitle" :rules="jobRules" label="Intitulé du poste"
                        required @input="jobFormDirty = true" />
                    </v-col>
                    <v-col>
                      <v-text-field v-model="job.companyName" :rules="jobRules" label="Entreprise"
                        required @input="jobFormDirty = true" />
                    </v-col>
                  </v-row>

                  <v-row>
                    <v-col>
                      <v-text-field v-model="job.jobDescription" :rules="jobRules" label="Longue description"
                        required @input="jobFormDirty = true" />
                    </v-col>
                    <v-col>
                      <v-text-field v-model="job.jobShortDescription" :rules="jobRules" label="Courte description"
                        required @input="jobFormDirty = true" />
                    </v-col>
                  </v-row>

                  <v-row>
                    <v-col>
                      <v-text-field v-model="job.jobTechnicalKeywords" :rules="jobRules" label="Environnement technique"
                        required @input="jobFormDirty = true" />
                    </v-col>
                    <v-col>
                      <v-text-field v-model="job.missions" :rules="jobRules" label="Missions"
                        required @input="jobFormDirty = true" />
                    </v-col>
                  </v-row>

                  <v-row>
                    <v-col>
                      <v-text-field v-model="job.startYear" :rules="jobRules" label="Année de début" required type="number"
                        @input="jobFormDirty = true" />
                    </v-col>
                  </v-row>

                  <v-row>
                    <v-col>
                      <v-text-field v-model="job.endYear" :rules="jobRules" label="Année de fin" required type="number"
                        @input="jobFormDirty = true" />
                    </v-col>
                  </v-row>

                  <v-row>
                    <v-col>
                      <v-switch  v-model="job.hasEnded" label="En cours" :rules="jobRules" required
                      @input="jobFormDirty = true"></v-switch>
                    </v-col>
                    <v-col>
                      <v-text-field v-model="job.endYear" :rules="educationRules" label="Année de fin" required
                        type="number" @input="jobFormDirty = true" />
                    </v-col>
                    <v-col>
                      <v-switch v-model="job.hasEnded" label="En cours" :rules="educationRules" required
                        @input="jobFormDirty = true"></v-switch>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col>
                      <v-btn :ripple="false" :outlined="!jobFormDirty" color="green" @click="saveJobStateAndLeave">
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
              <v-form ref="hobbiesForm" v-model="hobbiesFormValid" lazy-validation @submit.prevent="saveHobbiesState">
                <!-- /education /skills /previousJobs /hobbies /languages /extracurricularCertifications-->
                <v-container>
                  <v-row v-for="hobby in Hobbies" :key="hobby.id">
                    <v-col>
                      <v-text-field v-model="hobby.hobbies" label="Centres d'intérêt"
                        required @input="hobbiesFormDirty = true" />
                      <v-btn :ripple="false" :outlined="!hobbiesFormDirty" color="green" @click="saveHobbiesStateAndLeave">
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
              <v-form ref="languageForm" v-model="languageFormValid" lazy-validation @submit.prevent="saveLangState">
                <!-- /education /skills /previousJobs /hobbies /languages /extracurricularCertifications-->
                <v-container>
                  <v-row v-for="language in Languages" :key="language.id">
                    <v-col>
                      <v-text-field v-model="language.languageName" :rules="langRules" label="Langue" required
                        @input="languageFormDirty = true" />
                    </v-col>
                    <v-col>
                      <v-text-field v-model="language.level" :rules="langRules" label="Niveau" required
                        @input="languageFormDirty = true" />
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col>
                      <v-btn :ripple="false" :outlined="!languageFormDirty" color="green" @click="saveLangStateAndLeave">
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
              <v-form ref="CertificationForm" v-model="CertificationFormValid" lazy-validation @submit.prevent="saveCertifState">
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
                      <v-btn :ripple="false" :outlined="!CertificationFormDirty" color="green" @click="saveStateCertifAndLeave">
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
      
      hobbiesFormActive: true,
      hobbiesFormValid: false,
      hobbiesFormDirty: false,

      languageFormActive: true,
      languageFormValid: false,
      languageFormDirty: false,

      CertificationFormActive: true,
      CertificationFormValid: false,
      CertificationFormDirty: false,
      
      educationFormActive: true,
      educationFormValid: false,
      educationFormDirty: false,
      skillFormActive: true,
      skillFormValid: false,
      skillFormDirty: false,
      jobFormActive: true,
      jobFormValid: false,
      jobFormDirty: false,


      cv: {
        jobTitle: '',
        fullName: '',
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
      education: [{
        location: '',
        title: '',
        startYear: 0,
        hasEnded: '',
        endYear: 0,
        comments: '',
        id: ''
      }],
      skills: [{
        skillTitle: '',
        skillValue: '',
        id:''
      }],
      previousJobs:  [{
        jobTitle: '',
        companyName: '',
        jobDescription: '',
        jobShortDescription: '',
        jobTechnicalKeywords: '',
        startYear: '',
        hasEnded: '',
        endYear: '',
        missions: '',
        id:''
      }],
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


      fullNameRules: [
        (v: any) => !!v || 'Champ requis'
        ],
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
      emailRules: [
        (v: any) => !!v || 'Champ requis',
        (v: any) => /.+@.+\..+/.test(v) || 'Adresse mail invalide',
      ],
      certifRules: [
        (v: any) => !!v || 'Champ requis'
      ],
      yearRule: [
        (v: any) => typeof v === "number" || "Année invalide",
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

    async saveEducationStateAndLeave() {
      await this.saveEducationState()
      this.leavePage()
    },
    async saveEducationState() {
      this.educationFormDirty = false
      this.$api.education.add_to_cv(
        this.$route.params.cv, this.$route.params.location,  this.$route.params.title, Number(this.$route.params.startYear), Boolean(this.$route.params.hasEnded), Number(this.$route.params.endYear),
        this.$route.params.comments)
    },

    async saveSkillStateAndLeave() {
      await this.saveSkillState()
      this.leavePage()
    },
    async saveSkillState() {
      this.skillFormDirty = false
      this.$api.skill.add_to_cv(this.$route.params.cv, this.$route.params.skillTitle, [this.$route.params.skillValue])
    },

    async saveJobStateAndLeave() {
      await this.saveJobState()
      this.leavePage()
    },
    async saveJobState() {
      this.jobFormDirty = false
      this.$api.job.add_to_cv(this.$route.params.cv, this.$route.params.jobTitle, this.$route.params.companyName,
      this.$route.params.jobDescription, this.$route.params.jobShortDescription, [this.$route.params.jobTechnicalKeywords],
      Number(this.$route.params.startYear), Boolean(this.$route.params.hasEnded), Number(this.$route.params.endYear),[this.$route.params.missions])
    },
    

    async saveMainState() {
      this.mainFormDirty = false
    },

    async saveMainStateAndLeave() {
          await this.$api.cv.update_fullName(this.$route.params.cv, this.$route.params.fullName)
          await this.$api.cv.update_emailadress(this.$route.params.cv, this.$route.params.emailadress)
          await this.$api.cv.update_phonenumber(this.$route.params.cv, this.$route.params.phonenumber)
          await this.$api.cv.update_homeadress(this.$route.params.cv, this.$route.params.homeadress)
          await this.$api.cv.update_licence(this.$route.params.cv, this.$route.params.drivingLicence)
          await this.$api.cv.update_jobtitle(this.$route.params.cv, this.$route.params.jobtitle)
          this.leavePage()
        },

    // Hobbies
    async saveHobbiesState() {
      this.hobbiesFormDirty = false
      this.$api.cv.update_hobbies(
        this.$route.params.cv, [this.$route.params.hobby]
      )
    },

    async saveHobbiesStateAndLeave() {
      await this.saveHobbiesState()
      this.leavePage()
    },

    // Languages
    async saveLangState() {
      this.languageFormDirty = false
      this.$api.language.add_to_cv(
        this.$route.params.cv, this.$route.params.languageName, this.$route.params.level
      )
    },

    async saveLangStateAndLeave() {
      await this.saveLangState()
      this.leavePage()
    },

    // certifications
    async saveCertifState() {
      this.CertificationFormDirty = false
      this.$api.certification.add_to_cv(
        this.$route.params.cv, this.$route.params.authority, this.$route.params.certificationName, Number(this.$route.params.certificationPassYear)
        )
    },

    async saveStateCertifAndLeave() {
      await this.saveCertifState()
      this.leavePage()

    },

    

    leavePage() {
      this.mainFormActive = false
      this.$router.back()
    }
  },
})
</script>