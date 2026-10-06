// Session Safety & Hydration Tracker (100% LocalStorage, Zero Telemetry)
const STORAGE_KEY = "safepoint_session_data_v1";

export class SessionTracker {
  constructor() {
    this.data = this.loadData();
  }

  loadData() {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) return JSON.parse(stored);
    } catch (e) {
      console.warn("Could not load session data", e);
    }
    return {
      sessionStartTime: Date.now(),
      waterCount: 0,
      lastWaterTime: null,
      doses: [],
      notes: ""
    };
  }

  saveData() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.data));
    } catch (e) {
      console.warn("Could not save session data", e);
    }
  }

  addWaterCup() {
    const now = Date.now();
    this.data.waterCount += 1;
    this.data.lastWaterTime = now;
    this.saveData();
    return this.getWaterStatus();
  }

  resetWater() {
    this.data.waterCount = 0;
    this.data.lastWaterTime = null;
    this.saveData();
  }

  getWaterStatus() {
    const hoursElapsed = Math.max(1, (Date.now() - this.data.sessionStartTime) / (1000 * 60 * 60));
    const ratePerHour = this.data.waterCount / hoursElapsed;

    let warning = null;
    if (ratePerHour > 3) {
      warning = "HIGH WATER WARNING: You are drinking more than 750ml/hour. If using MDMA, drinking excessive plain water can cause fatal brain swelling (hyponatremia). Switch to electrolyte drinks or reduce intake.";
    } else if (ratePerHour < 0.5 && hoursElapsed >= 2) {
      warning = "HYDRATION REMINDER: Remember to sip a cup of water or sports drink (approx 250ml per hour if resting, 500ml if dancing).";
    }

    return {
      count: this.data.waterCount,
      ratePerHour: ratePerHour.toFixed(1),
      warning: warning,
      lastLogged: this.data.lastWaterTime
    };
  }

  logDose(substanceName, notes) {
    const doseEntry = {
      id: "dose_" + Date.now(),
      substance: substanceName,
      time: Date.now(),
      notes: notes || ""
    };
    this.data.doses.unshift(doseEntry);
    this.saveData();
    return doseEntry;
  }

  getDoses() {
    return this.data.doses;
  }

  clearSession() {
    this.data = {
      sessionStartTime: Date.now(),
      waterCount: 0,
      lastWaterTime: null,
      doses: [],
      notes: ""
    };
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch (e) {}
  }
}
