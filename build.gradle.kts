plugins {
    kotlin("multiplatform")
    id("org.jetbrains.compose")
}
kotlin {
    jvm()
    sourceSets {
        commonMain {
            dependencies {
                implementation(libs.arrow.core)
                implementation(libs.arrow.fx.coroutines)
            }
        }
    }
}


repositories {
    mavenCentral()
}

tasks.wrapper {
    gradleVersion = "8.1.1"
    distributionType = Wrapper.DistributionType.BIN
}