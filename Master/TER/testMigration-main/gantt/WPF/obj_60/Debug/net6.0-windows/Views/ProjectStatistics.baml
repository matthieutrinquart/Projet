   M S B A M L   `   `   `  ����U  Qsyncfusion.demoscommon.wpf, Version=1.0.0.0, Culture=neutral, PublicKeyToken=nullkLclr-namespace:syncfusion.demoscommon.wpf;assembly=syncfusion.demoscommon.wpfsyncfusion.demoscommon.wpf  5      T Psyncfusion.ganttdemos.wpf, Version=1.0.0.0, Culture=neutral, PublicKeyToken=nullE'clr-namespace:syncfusion.ganttdemos.wpfsyncfusion.ganttdemos.wpf 5      1   +syncfusion.ganttdemos.wpf.ProjectStatistics   5      W SPresentationCore, Version=6.0.2.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35\ XPresentationFramework, Version=6.0.2.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35e aSystem.Windows.Controls.Ribbon, Version=6.0.2.0, Culture=neutral, PublicKeyToken=b77a5c561934e089R NWindowsBase, Version=6.0.2.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35^ ZWindowsFormsIntegration, Version=6.0.2.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35H 9http://schemas.microsoft.com/winfx/2006/xaml/presentation      5      R NSystem.Xaml, Version=6.0.2.0, Culture=neutral, PublicKeyToken=b77a5c561934e089:x,http://schemas.microsoft.com/winfx/2006/xaml     5      c
democommonLclr-namespace:syncfusion.demoscommon.wpf;assembly=syncfusion.demoscommon.wpf     5      _ [Microsoft.Xaml.Behaviors, Version=1.1.0.0, Culture=neutral, PublicKeyToken=b03f5f7f11d50a3a:interact+http://schemas.microsoft.com/xaml/behaviors  5      3local'clr-namespace:syncfusion.ganttdemos.wpf  5      `	 \Syncfusion.Gantt.Wpf, Version=20.1500.0.47, Culture=neutral, PublicKeyToken=3d67ed1f87d44c89_
 [Syncfusion.Grid.Wpf, Version=20.1500.0.47, Culture=neutral, PublicKeyToken=3d67ed1f87d44c89e aSyncfusion.GridCommon.WPF, Version=20.1500.0.47, Culture=neutral, PublicKeyToken=3d67ed1f87d44c89` \Syncfusion.Linq.Base, Version=20.1500.0.47, Culture=neutral, PublicKeyToken=3d67ed1f87d44c89j fSyncfusion.SfBusyIndicator.WPF, Version=20.1500.0.47, Culture=neutral, PublicKeyToken=3d67ed1f87d44c89b ^Syncfusion.SfChart.WPF, Version=20.1500.0.47, Culture=neutral, PublicKeyToken=3d67ed1f87d44c89b ^Syncfusion.SfInput.Wpf, Version=20.1500.0.47, Culture=neutral, PublicKeyToken=3d67ed1f87d44c89h dSyncfusion.SfSkinManager.WPF, Version=20.1500.0.47, Culture=neutral, PublicKeyToken=3d67ed1f87d44c89a ]Syncfusion.Shared.WPF, Version=20.1500.0.47, Culture=neutral, PublicKeyToken=3d67ed1f87d44c89B
syncfusion!http://schemas.syncfusion.com/wpf	 	 
        5      $
��auto��5	      $
��auto��5
      
�������
���   �  � DataContext  5      :  4syncfusion.ganttdemos.wpf.ProjectStatisticsViewModel  5   
   *  $Microsoft.Xaml.Behaviors.Interaction   	Behaviors 5      8  2syncfusion.ganttdemos.wpf.GanttStatisticskBehavior  5   
    � 	Resources 5         gridViewbackground �� 
StartPoint �� EndPoint � Offset � Color��%�   &	        �� 5   
   $ 0.5,0&�69   $ 0.5,1&�6L   .��5      � $
 0.08Q�6   $ 	#FF119EDA��6)   � 5      $ 0.479Q�6   $ 	#FF2C9ECE��6*   � 5      $ 0.973Q�6   $ 	#FF119EDA��6*   5      5      .��5!      �� ._�5"   
   4 	 .Syncfusion.Windows.Controls.Gantt.GanttControl  -   5          Name$ Gantt��5#      $��1��5$      $��0��5%         ProjectName$+ %Residential Construction (2500 sq.ft)��5'      	   ShowBaseline$
	 True��5(      
   UseAutoUpdateHierarchy$
 False��5)         ItemsSource 5&      �� *TaskDetails+   TaskAttributeMapping 5*      < 	 6Syncfusion.Windows.Controls.Gantt.TaskAttributeMapping  5+         BaselineCostMapping$ BaselineCost��5,         BaselineFinishMapping$ BaselineEnd��5-         BaselineStartMapping$ BaselineStart��5.         ChildMapping$ 	ChildTask��5/         CostMapping$
 Cost��50         DurationMapping$ Duration��51         FinishDateMapping$ EndDate��52         PredecessorMapping$ Predecessor��53         ProgressMapping$ Complete��54         ResourceInfoMapping$ Resource��55         StartDateMapping$ StDate��56         TaskIdMapping$ Id��57         TaskNameMapping$
 Name��58      5:      5;      ,   &syncfusion.demoscommon.wpf.DemoControl   Options 5=      �� 5>   
   -   5         ��Name$ 
Statistics��5?      $
��Auto��5@      $��30��5A      $��10q�5B      $��3q�5C      $��Center=�5D      $	��Top=�5E      $��Get Statistics��5F      5H      