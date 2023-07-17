rootProject.name = "backstage-studiohummingbird-games"

pluginManagement {
    repositories {
        google()
        gradlePluginPortal()
        mavenCentral()
        maven("https://maven.pkg.jetbrains.space/public/p/compose/dev")
        maven("https://jitpack.io")
    }

    plugins {
        kotlin("multiplatform") version(extra["kotlin.version"] as String) apply false
        id("org.jetbrains.compose") version(extra["compose.version"] as String) apply false
    }
}
