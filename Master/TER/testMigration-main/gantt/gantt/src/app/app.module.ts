import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NodeStyleComponent } from './node-style/node-style.component';
import { GanttStyleComponent } from './gantt-style/gantt-style.component';
import { SplitTaskSampleComponent } from './split-task-sample/split-task-sample.component';
import { CustomizedTableComponent } from './customized-table/customized-table.component';
import { ExternalPropertyBindingComponent } from './external-property-binding/external-property-binding.component';
import { FlatPerformanceCheckComponent } from './flat-performance-check/flat-performance-check.component';
import { HighlightingTasksComponent } from './highlighting-tasks/highlighting-tasks.component';
import { CustomZoomingComponent } from './custom-zooming/custom-zooming.component';
import { CustomMetroStyleComponent } from './custom-metro-style/custom-metro-style.component';
import { PredecessorsComponent } from './predecessors/predecessors.component';
import { HierarchyPerformanceCheckComponent } from './hierarchy-performance-check/hierarchy-performance-check.component';
import { CustomNumericScheduleComponent } from './custom-numeric-schedule/custom-numeric-schedule.component';
import { CalendarCustomizationComponent } from './calendar-customization/calendar-customization.component';
import { ResourceViewComponent } from './resource-view/resource-view.component';
import { EssentialGanttComponent } from './essential-gantt/essential-gantt.component';
import { ProjectSchedulerComponent } from './project-scheduler/project-scheduler.component';
import { StatisticsWindowComponent } from './statistics-window/statistics-window.component';
import { ImportExportDemoComponent } from './import-export-demo/import-export-demo.component';
import { CriticalPathComponent } from './critical-path/critical-path.component';
import { CustomizedScheduleAppearanceComponent } from './customized-schedule-appearance/customized-schedule-appearance.component';
import { BaselineTableViewComponent } from './baseline-table-view/baseline-table-view.component';
import { ExportToImageComponent } from './export-to-image/export-to-image.component';
import { ResourceNameCustomizationComponent } from './resource-name-customization/resource-name-customization.component';
import { CustomDateTimeScheduleComponent } from './custom-date-time-schedule/custom-date-time-schedule.component';
import { BindingTaskDetailsComponent } from './binding-task-details/binding-task-details.component';
import { CustomToolTipComponent } from './custom-tool-tip/custom-tool-tip.component';
import { BuiltinZoomingComponent } from './builtin-zooming/builtin-zooming.component';
import { CustomNodeStyleComponent } from './custom-node-style/custom-node-style.component';
import { GanttStylePropertiesComponent } from './gantt-style-properties/gantt-style-properties.component';
import { GanttStripLineComponent } from './gantt-strip-line/gantt-strip-line.component';
import { ProjectStatisticsComponent } from './project-statistics/project-statistics.component';

@NgModule({
  declarations: [
    AppComponent,
    NodeStyleComponent,
    GanttStyleComponent,
    SplitTaskSampleComponent,
    CustomizedTableComponent,
    ExternalPropertyBindingComponent,
    FlatPerformanceCheckComponent,
    HighlightingTasksComponent,
    CustomZoomingComponent,
    CustomMetroStyleComponent,
    PredecessorsComponent,
    HierarchyPerformanceCheckComponent,
    CustomNumericScheduleComponent,
    CalendarCustomizationComponent,
    ResourceViewComponent,
    EssentialGanttComponent,
    ProjectSchedulerComponent,
    StatisticsWindowComponent,
    ImportExportDemoComponent,
    CriticalPathComponent,
    CustomizedScheduleAppearanceComponent,
    BaselineTableViewComponent,
    ExportToImageComponent,
    ResourceNameCustomizationComponent,
    CustomDateTimeScheduleComponent,
    BindingTaskDetailsComponent,
    CustomToolTipComponent,
    BuiltinZoomingComponent,
    CustomNodeStyleComponent,
    GanttStylePropertiesComponent,
    GanttStripLineComponent,
    ProjectStatisticsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
